import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';
import { signUpThunk } from '../../modules/auth';

const AuthSignUpDetailContainer = () => {
    const { files, username, nickname, password, gender, modal } = useSelector(({ image, auth, profile }) => ({
        files: image.files,
        username: auth.signUp.username,
        nickname: auth.signUp.nickname,
        password: auth.signUp.password,
        gender: auth.signUp.gender,
        modal: profile.modal,
    }));

    const dispatch = useDispatch();

    const onPressSubmit = useCallback(async () => {
        const { user } = await dispatch(signUpThunk({
            username,
            nickname,
            password,
            gender,
        }));

        const formData = new FormData();
        
        const imageOrder = [];
        files.forEach((file, index) => {
            if(file !== null) {
                imageOrder.push(index);
                formData.append('authImages', {
                    name: file.path.split('/').pop(),
                    type: file.mime,
                    uri: Platform.OS === 'android' ? file.path : file.path.replace('file://', ''),
                });
            }
        });

        const inform = {
            userId: user.id,
            imageOrder,
        }

        formData.append('authInform', JSON.stringify(inform));

        await dispatch(createAuthImage(
            formData,
        ));

    }, [dispatch, files, username, nickname, password, gender]);
    
    return (
        <AuthSignUpDetail
            modal={modal}
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpDetailContainer;