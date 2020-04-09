import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';
import { signUpThunk } from '../../modules/auth';

const minimumPhoto = 3;

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
    const [ mention, setMention ] = useState(null);

    useEffect(() => {
        const count = files.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
        setMention(minimumPhoto > count ? `${minimumPhoto - count}장이 더 필요합니다`: null);
    }, [files])

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
            scrollRef={scrollRef}    
            mention={mention}
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpDetailContainer;