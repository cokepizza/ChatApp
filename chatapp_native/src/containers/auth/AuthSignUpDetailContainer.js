import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';

const AuthSignUpDetailContainer = () => {
    const { files, username } = useSelector(({ image, auth }) => ({
        files: image.files,
        username: auth.signUp.username,
    }));

    const dispatch = useDispatch();

    const onPressSubmit = useCallback(async () => {
        const formData = new FormData();
        
        const imageIndex = [];
        files.forEach((file, index) => {
            if(file !== null) {
                imageIndex.push(index);
                formData.append('authImages', {
                    name: file.path.split('/').pop(),
                    type: file.mime,
                    uri: Platform.OS === 'android' ? file.path : file.path.replace('file://', ''),
                });
            }
        });

        const inform = {
            username,
            imageIndex,
        }

        formData.append('authInform', JSON.stringify(inform));

        await dispatch(createAuthImage(
            formData,
        ));

    }, [dispatch, files, username]);
    
    return (
        <AuthSignUpDetail
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpDetailContainer;