import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import awsLocationConfig from './config/awsLocationConfig.json';
aws.config.loadFromPath(__dirname + '/config/awsSecretConfig.json');

const s3 = new aws.S3();

// s3Storage
export const upload = multer({
    storage: multerS3({
        s3,
        bucket: awsLocationConfig.s3bucket,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + "_" + file.originalname);
        }
    })
});