import React, { useState, useCallback, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from '../../components/auth/Profile';
import { setValue } from '../../modules/profile';

const ProfileContainer = () => {
    //  TextArea는 라이브러리 형태로 만들어봄
    const {
        introduction,
        introductionWordLimit,
        school,
        major,
        job,
        region,
        validation,
    } = useSelector(({ profile }) => ({
        introduction: profile.introduction,
        introductionWordLimit: profile.introductionWordLimit,
        school: profile.school,
        major: profile.major,
        job: profile.job,
        region: profile.region,
        validation: profile.validation,
    }));

    const dispatch = useDispatch();

    const [ focused, setFocused ] = useState([ false, false, false, false ]);
    const inputRef = useRef([ createRef(), createRef(), createRef(), createRef() ]);

    const onPress = useCallback(index => {
        inputRef.current[index].focus();
    }, []);
    
    const clearFocus = useCallback(() => {
        inputRef.current.forEach(input => input.blur());
        setFocused([ false, false, false, false ]);
    }, []);

    const onFocus = useCallback(index => {
        setFocused(prevState => {
            const nextFocused = [ false, false, false, false ];
            nextFocused[index] = true;
            return nextFocused;
        })
    }, []);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }))
    }, []);

    const onPressBackground = useCallback(() => {
        clearFocus();
    }, []);

    return (
        <Profile
            inputRef={inputRef}
            focused={focused}
            introduction={introduction}
            introductionWordLimit={introductionWordLimit}
            school={school}
            major={major}
            job={job}
            region={region}
            validation={validation}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onPress={onPress}
            onPressBackground={onPressBackground}
        />
    );
};

export default ProfileContainer;