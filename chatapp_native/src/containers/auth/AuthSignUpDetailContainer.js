import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';
import { signUpThunk } from '../../modules/auth';

const minimumPhoto = 3;

const AuthSignUpDetailContainer = () => {
    const {
        username,
        password,
        gender,
        phone,
        nickname,
        introduction,
        school,
        major,
        job,
        work,
        region,
        birth,
        tall,
        shape,
        character,
        bloodType,
        smoking,
        drinking,
        files,
        validation,
        duplicateCheckFlag
    } = useSelector(({ base, verify, profile, image }) => ({ 
        username: base.username,
        password: base.password,
        gender: base.gender,
        phone: verify.createSMSInput,
        nickname: profile.nickname,
        introduction: profile.introduction,
        school: profile.school,
        major: profile.major,
        job: profile.job,
        work: profile.work,
        region: profile.region,
        birth: profile.birth,
        tall: profile.tall,
        shape: profile.shape,
        character: profile.character,
        bloodType: profile.bloodType,
        smoking: profile.smoking,
        drinking: profile.drinking,
        files: image.files,
        validation: profile.validation,
        duplicateCheckFlag: profile.duplicateCheckFlag,
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
            password,
            gender,
            phone,
            nickname,
            introduction,
            school,
            major,
            job,
            work,
            region,
            birth,
            tall,
            shape,
            character,
            bloodType,
            smoking,
            drinking,
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

    }, [dispatch,
        username,
        password,
        gender,
        phone,
        nickname,
        introduction,
        school,
        major,
        job,
        work,
        region,
        birth,
        tall,
        shape,
        character,
        bloodType,
        smoking,
        drinking,
        files]);
    
    return (
        <AuthSignUpDetail
            scrollRef={scrollRef}    
            mention={mention}
            validation={validation}
            duplicateCheckFlag={duplicateCheckFlag}
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpDetailContainer;