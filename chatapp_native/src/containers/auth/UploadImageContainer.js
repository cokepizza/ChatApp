import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

import UploadImage from '../../components/auth/UploadImage';
import { setImages } from '../../modules/auth';

const AuthSignUpImageContainer = () => {
    const { images } = useSelector(({ auth }) => ({
        images: auth.images,
    }));

    const dispatch = useDispatch();

    const onPressImageCrop = index => {
        ImagePicker.openPicker({
            width: 1000,
            height: 1000,
            cropperToolbarTitle: 'crop',
            avoidEmptySpaceAroundImage: false,
            // cropperCircleOverlay: true,
            cropping: true,
            mediaType: 'photo',
            // freeStyleCropEnabled: true,
            // showCropGuidelines: true,
        }).then(imageFile => {
            console.log(image);
            const image = {
                uri: imageFile.path,
                width: imageFile.width,
                height: imageFile.height,
                mime: imageFile.mime,
            };

            dispatch(setImages({
                index,
                image,
            }));
        });
    };

    return (
        <UploadImage
            images={images}
            onPressImageCrop={onPressImageCrop}
        />
    );
};

export default AuthSignUpImageContainer;