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
    
    client.messages.create({
        body: 'hixxx service. is this your phone?',
        from: originNumber,
        // to: '+82-1026699539',
        // to: '+82-1077486664',
        // to: '+82-1036324836',
        to: '+82-1025734800',
    })
    .then(message => console.log(message.sid));
    console.log(phone);

    return res.status(200).end();
};