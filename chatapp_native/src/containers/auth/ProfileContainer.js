import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from '../../components/auth/Profile';
import { setValue } from '../../modules/profile';

const ProfileContainer = () => {
    //  TextArea는 라이브러리 형태로 만들어봄
    const { introduction, introductionWordLimit } = useSelector(({ profile }) => ({
        introduction: profile.introduction,
        introductionWordLimit: profile.introductionWordLimit,
    }));

    const dispatch = useDispatch();

    const onChangeText = value => {
        dispatch(setValue({
            key: 'introduction',
            value,
        }))
    };

    return (
        <Profile
            introduction={introduction}
            introductionWordLimit={introductionWordLimit}
            onChangeText={onChangeText}
        />
    );
};

export default ProfileContainer;