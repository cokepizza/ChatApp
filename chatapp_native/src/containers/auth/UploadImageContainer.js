import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
// import communications from 'react-native-communications';

import UploadImage from '../../components/auth/UploadImage';
import { setImage, clearImage, setLoading, clearLoading } from '../../modules/uploadImage';

const AuthSignUpImageContainer = () => {
    const { images, loadings } = useSelector(({ uploadImage }) => ({
        images: uploadImage.images,
        loadings: uploadImage.loadings,
    }));

    const dispatch = useDispatch();

    //  test
    // useEffect(() => {
    //     communications.phonecall('01077486664', 'hi hello cokepizza');
    // }, []);

    const onPressImageCrop = useCallback(index => {
        dispatch(setLoading({
            index,
        }));

        if(images[index] === null) {
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

                dispatch(clearLoading({
                    index,
                }));

                dispatch(setImage({
                    index,
                    image,
                }));
            });
        } else {

            setTimeout(() => {
                dispatch(clearImage({
                    index,
                }));

                dispatch(clearLoading({
                    index,
                }));
            }, 200);
        }
    }, [images]);

    return (
        <UploadImage
            images={images}
            loadings={loadings}
            onPressImageCrop={onPressImageCrop}
        />
    );
};

export default AuthSignUpImageContainer;