import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
// import communications from 'react-native-communications';

import UploadImage from '../../components/auth/UploadImage';
import {
    setFile,
    clearFile,
    setImage,
    clearImage,
    setLoading,
    clearLoading
} from '../../modules/uploadImage';

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
        if(images[index] === null) {
            setTimeout(() => {
                dispatch(setLoading({
                    index,
                }));
            }, 500);

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
            }).then(file => {
                const image = {
                    uri: file.path,
                    width: file.width,
                    height: file.height,
                    mime: file.mime,
                };

                dispatch(clearLoading({
                    index,
                }));
                dispatch(setImage({
                    index,
                    image,
                }));
                dispatch(setFile({
                    index,
                    file,
                }));
            }).catch(e => {
                console.log(e);
                dispatch(clearLoading({
                    index,
                }));
            });
        } else {
            dispatch(clearLoading({
                index,
            }));
            dispatch(clearImage({
                index,
            }));
            dispatch(clearFile({
                index,
            }))
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