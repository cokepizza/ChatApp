// import twilioConfig from '../../config/twilioConfig';
import { accountSid, authToken, originNumber } from '../../config/twilioConfig';
import twilio from 'twilio';

export const createSMS = (req, res, next) => {
    const { phone } = req.body;
    const client = twilio(accountSid, authToken);
    client.messages.create({
        body: 'hixxx service. is this your phone?',
        from: originNumber,
        to: phone,
    })
    .then(message => console.log(message.sid));

    return res.status(200).end();
};