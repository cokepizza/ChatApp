import React, { useState, useCallback, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from '../../components/auth/Profile';
import { setValue as setProfileValue } from '../../modules/profile';
import { setModal, setValue as setModalValue } from '../../modules/modal';

const componentNum = 7;
const inputComponentNum = 6;

const ProfileContainer = ({ scrollRef }) => {
    //  TextArea는 라이브러리 형태로 만들어봄
    const {
        introduction,
        introductionWordLimit,
        nickname,
        school,
        major,
        job,
        work,
        region,
        validation,
    } = useSelector(({ profile }) => ({
        introduction: profile.introduction,
        introductionWordLimit: profile.introductionWordLimit,
        nickname: profile.nickname,
        school: profile.school,
        major: profile.major,
        job: profile.job,
        work: profile.work,
        region: profile.region,
        validation: profile.validation,
    }));

    const dispatch = useDispatch();

    const initialStateMaker = useCallback(initValue => {
        const arr = [];
        for(let i=0; i<componentNum; ++i) {
            if(typeof initValue === 'function') {
                arr.push(initValue());
            } else {
                arr.push(initValue);
            }
        }
        return arr;
    }, []);

    const [ focused, setFocused ] = useState(initialStateMaker(false));
    const containerHeight = useRef();
    const componentHeight = useRef(initialStateMaker(null));
    const inputRef = useRef(initialStateMaker(createRef));

    const onPress = useCallback(index => {
        inputRef.current[index].focus();
    }, []);
    
    const clearFocus = useCallback(() => {
        inputRef.current.forEach((input, index) => {
            if(index < inputComponentNum) {
                input.blur();
            }
        });

        setFocused(initialStateMaker(false));
    }, []);

    const onFocus = useCallback(index => {
        if(scrollRef.current) {
            scrollRef.current.scrollTo({ y: containerHeight.current + componentHeight.current[index], animated: true });
        }
    
        setFocused(prevState => {
            const nextFocused = initialStateMaker(false);
            nextFocused[index] = true;
            return nextFocused;
        });
    }, []);

    const onPressPicker = useCallback((key, value, index) => {
        console.log(key);
        console.log(value);
        console.log(index);
        
        dispatch(setModal({
            modal: key,
        }));
        dispatch(setModalValue({
            key,
            value,
        }))

        clearFocus();
        onFocus(index);
    }, [dispatch, clearFocus, onFocus]);

    const onChangeText = useCallback((key, value) => {
        dispatch(setProfileValue({
            key,
            value,
        }));
    }, []);

    const onPressBackground = useCallback(() => {
        clearFocus();
    }, []);

    const onLayout = useCallback(({ nativeEvent: { layout: { x, y, width, height }}}, index) => {
        if(index === -1) {
            containerHeight.current = y;
        } else {
            componentHeight.current[index] = y;
        }
    }, []);

    return (
        <Profile
            inputRef={inputRef}
            focused={focused}
            introduction={introduction}
            introductionWordLimit={introductionWordLimit}
            nickname={nickname}
            school={school}
            major={major}
            job={job}
            work={work}
            region={region}
            validation={validation}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onPress={onPress}
            onPressPicker={onPressPicker}
            onPressBackground={onPressBackground}
            onLayout={onLayout}
        />
    );
};

export default ProfileContainer;