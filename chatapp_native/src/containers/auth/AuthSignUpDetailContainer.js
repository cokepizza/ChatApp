import React, { useCallback, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';
import { signUpThunk } from '../../modules/auth';

const AuthSignUpDetailContainer = () => {
    const { files, username, nickname, password, gender } = useSelector(({ image, base, profile }) => ({
        files: image.files,
        username: base.username,
        nickname: profile.nickname,
        password: base.password,
        gender: base.gender,
    }));

    const dispatch = useDispatch();
    const scrollRef = useRef();

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
            onPressSubmit={onPressSubmit}
            scrollRef={scrollRef}
        />
    );
};

export default AuthSignUpDetailContainer;