// import twilioConfig from '../../config/twilioConfig';
import { accountSid, authToken, originNumber } from '../../config/twilioConfig.json';
import twilio from 'twilio';

export const createSMS = (req, res, next) => {
    console.log('createSMS');
    console.log(accountSid);
    console.log(authToken);
    console.log(originNumber);

    const { phone } = req.body;
    const client = twilio(accountSid, authToken);

    const s = 100000;
    const e = 1000000;
    const verificationNumber = Math.floor(s + (e - s) * Math.random());

    client.messages.create({
        body: `hixxx service. Code: ${verificationNumber}`,
        from: originNumber,
        // to: '+82-1026699539',
        // to: '+82-1077486664',
        // to: '+82-1036324836',
        to: '+82-1025734800',
    })
    .then(message => {
        return res.status(200).send();
    })
    .catch(e => {
        console.dir(e);
        // return res.status(404).send({
        //     error: '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.',
        // });
        return res.status(200).send();
    });
};