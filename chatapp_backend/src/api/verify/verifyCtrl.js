// import twilioConfig from '../../config/twilioConfig';
import { accountSid, authToken, originNumber } from '../../config/twilioConfig.json';
import twilio from 'twilio';
import jwt from 'jsonwebtoken';

export const createSMS = (req, res, next) => {
    console.log('createSMS');
    console.log(accountSid);
    console.log(authToken);
    console.log(originNumber);

    const { phone } = req.body;
    const client = twilio(accountSid, authToken);

    const s = 100000;
    const e = 1000000;
    const verificationCode = Math.floor(s + (e - s) * Math.random());

    client.messages.create({
        body: `hixxx service. Code: ${verificationCode}`,
        from: originNumber,
        to: '+82-1026699539',
        // to: '+82-1077486664',
        // to: '+82-1036324836',
        // to: '+82-1025734800',
    })
    .then(message => {
        //  임시 토큰 발급이 필요 verifyToken으로 asyncStorage에는 저장하지 말 것
        //  해당 토큰을 들고 인증에 접근해서 토큰과 보낸 인증번호가 같으면 인증완료 (http콜에는 토큰 들고 가야 함)
        //  인증 완료 성공 시 웹소켓을 disconnect하고 서버에서는 disconnect시에 돌고 있던 setTimeout을 clear해준다
        //  실패시에는 disconnect하지 않는다
        //  타이머의 경우에는 웹소켓을 이어서 서버쪽에서 시간을 확인한 후 앱에 뿌려주는 식으로 구현 예정 (웹소켓에 토큰 들고가서 만든 시작시간이랑 차이보고 초기 시간 정해주기)
        //  verifyTimer 네임스페이스를 따로 만들어야 함
        //  별도의 상태 없이 stateless하게 구현 가능

        // const tokenTimeLimit = Number(3000);
        // const token = jwt.sign(user, process.env.JWT_SECRET, {
        //     issuer: 'cokepizza',
        //     verificationNumber,
        //     expiresIn: tokenTimeLimit,
        // });

        // return res.status(200).send({
        //     token,
        // });
    })
    .catch(e => {
        // return res.status(404).send({
        //     error: '네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.',
        // });
        console.dir('verificationCode');
        console.dir(verificationCode);

        //  3분
        // const tokenTimeLimit = Number(60 * 3);
        const tokenTimeLimit = Number(10 * 3);
        const verify = {
            verificationCode,
        }
        const token = jwt.sign(verify, process.env.JWT_SECRET, {
            issuer: 'cokepizza',
            expiresIn: tokenTimeLimit,
        });

        console.dir(token);

        return res.status(200).send({
            token,
        });
    });
};

export const verifyToken = (req, res, next) => {
    const { code, token } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.status(400).send({
                error: '인증 시간이 만료되었습니다',
            })
        }

        const { verificationCode, exp } = decoded;
        const timeNow = parseInt(new Date().getTime() / 1000);
        
        console.dir(`timeLeft : ${exp-timeNow}`);
        if(exp < timeNow) {
            console.dir('인증 시간이 만료되었습니다');
            return res.status(400).send({
                error: '인증 시간이 만료되었습니다',
            });
        } else {
            if(parseInt(verificationCode) !== parseInt(code)) {
                console.dir('인증 코드가 유효하지 않습니다');
                return res.status(400).send({
                    error: '인증 코드가 유효하지 않습니다',
                });
            } else {
                console.dir('인증 성공');
                return res.status(200).end();
            }
        }
    });  
};