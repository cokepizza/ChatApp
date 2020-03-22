import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

import AuthImage from '../../components/auth/AuthImage';
import {
    setFile,
    clearFile,
    setImage,
    clearImage,
    setLoading,
    clearLoading
} from '../../modules/image';

const AuthImageContainer = () => {
    const { images, loadings } = useSelector(({ image }) => ({
        images: image.images,
        loadings: image.loadings,
    }));
    
    console.log('AuthImageContainer');

    const dispatch = useDispatch();

    const onPressImageCrop = useCallback(index => {
        if(images[index] === null) {
            setTimeout(() => {
                dispatch(setLoading({
                    index,
                }));
            }, 500);

            ImagePicker.openPicker({
                width: 500,
                height: 500,
                cropperToolbarTitle: 'crop',
                avoidEmptySpaceAroundImage: false,
                cropping: true,
                mediaType: 'photo',
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
        <AuthImage
            images={images}
            loadings={loadings}
            onPressImageCrop={onPressImageCrop}
        />
    );
};

export default AuthImageContainer;