import React, { useState, useCallback, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from '../../components/auth/Profile';
import { setValue } from '../../modules/profile';

const componentNum = 7;

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
        modal,
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
        modal: profile.modal,
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
    const [ containerHeight, setContainerHeight ] = useState(0);
    const [ componentHeight, setComponentHeight ] = useState(initialStateMaker(null));
    const inputRef = useRef(initialStateMaker(createRef));

    const onPress = useCallback(index => {
        inputRef.current[index].focus();
    }, []);

    const onPressPicker = index => {
        if(scrollRef.current) {
            scrollRef.current.scrollTo({ y: containerHeight + componentHeight[index], animated: true });
        }

        setFocused(prevState => {
            const nextFocused = initialStateMaker(false);
            nextFocused[index] = true;
            return nextFocused;
        });
    }
    
    const clearFocus = useCallback(() => {
        inputRef.current.forEach(input => input.blur());
        setFocused(initialStateMaker(false));
    }, []);

    const onFocus = useCallback(index => {
        if(scrollRef.current) {
            scrollRef.current.scrollTo({ y: containerHeight + componentHeight[index], animated: true });
        }
        
        setFocused(prevState => {
            const nextFocused = initialStateMaker(false);
            nextFocused[index] = true;
            return nextFocused;
        });
    }, [containerHeight, componentHeight]);

    const onChangeText = useCallback((key, value) => {
        dispatch(setValue({
            key,
            value,
        }))
    }, []);

    const onPressBackground = useCallback(() => {
        clearFocus();
    }, []);

    const onLayout = useCallback(({ nativeEvent: { layout: { x, y, width, height }}}, index) => {
        if(index === -1) {
            setContainerHeight(y);
        } else {
            setComponentHeight(prevState => {
                const nextState = [ ...prevState ];
                nextState[index] = y;
                return nextState;
            });
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
            modal={modal}
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