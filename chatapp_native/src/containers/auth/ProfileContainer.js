import React, { useState, useCallback, useEffect, useRef, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joi from 'react-native-joi';

import Profile from '../../components/auth/Profile';
import {
    setValue as setProfileValue,
    clearValue as clearProfileValue,
    duplicateCheck
} from '../../modules/profile';
import { setModal, setValue as setModalValue } from '../../modules/modal';
import { inform } from '../../modules/modal';

const componentNum = 14;
const inputComponentNum = 6;
const modalList = Object.keys(inform);

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
        birth,
        tall,
        shape,
        character,
        bloodType,
        smoking,
        drinking,
        validation,
        modal,
        duplicateCheckFlag,
        duplicateCheckLoading,
        duplicateCheckError,
    } = useSelector(({ profile, modal }) => ({
        introduction: profile.introduction,
        introductionWordLimit: profile.introductionWordLimit,
        nickname: profile.nickname,
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
        validation: profile.validation,
        duplicateCheckFlag: profile.duplicateCheckFlag,
        duplicateCheckLoading: profile.duplicateCheckLoading,
        duplicateCheckError: profile.duplicateCheckError,
        modal: modal.modal,
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

    useEffect(() => {
        const schema = Joi.object().keys({
            nickname: Joi.string().min(2).max(30).required(),
            school: Joi.string().min(2).max(30).required(),
            major: Joi.string().min(2).max(30).required(),
            job: Joi.string().min(2).max(30).required(),
            work: Joi.string().min(2).max(30).required(),
            region: Joi.string().min(2).max(30).required(),
            birth: Joi.string().min(2).max(30).required(),
            tall: Joi.string().min(2).max(30).required(),
            shape: Joi.string().min(2).max(30).required(),
            character: Joi.string().min(2).max(30).required(),
            bloodType: Joi.string().min(1).max(30).required(),
            smoking: Joi.string().min(2).max(30).required(),
            drinking: Joi.string().min(2).max(30).required(),
        });

        const profile = {
            nickname,
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
        }

        const revisedValidation =
            Object.keys(profile)
                .reduce((acc, cur) =>
                    ({
                        ...acc,
                        [cur]: true,
                    }), {});

        const result = Joi.validate(profile, schema, { abortEarly: false });

        if(result.error) {
            result.error.details.forEach(detail => {
                revisedValidation[detail.path] = false;
            });
        };

        dispatch(setProfileValue({
            key: 'validation',
            value: revisedValidation,
        }));
    }, [dispatch, nickname, school, major, job, work, region, birth, tall, shape, character, bloodType, smoking, drinking]);        

    useEffect(() => {
        if(modal) {
            const currentIndex = modalList.indexOf(modal);
            onFocus(inputComponentNum + currentIndex);
        } else {
            clearFocus();
        }
    }, [modal, inputComponentNum, onFocus, clearFocus]);

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
    }, [inputComponentNum]);

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
        dispatch(setModal({
            modal: key,
        }));
        
        const join = inform[key].join;
        const values = value.trim().split(`${join}`);
        if(inform[key].type === 'picker') {
            values.forEach((itemValue, itemIndex) => {
                dispatch(setModalValue({
                    key,
                    index: itemIndex,
                    value: itemValue,
                }));
            });
        } else if(inform[key].type === 'selection') {
            const valueSet = new Set(values);
            inform[key].list.forEach((val, itemIndex) => {
                if(valueSet.has(val)) {
                    dispatch(setModalValue({
                        key,
                        index: itemIndex,
                        value: true,
                    }));
                }
            });
        }
        
        clearFocus();
        onFocus(index);
    }, [dispatch, clearFocus, onFocus, inform]);

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
            componentHeight.current[index] = y - 10;
        }
    }, []);

    const onKeyboardReturn = useCallback(index => {
        if(index+1 < inputComponentNum) {
            inputRef.current[index+1].focus();
        } else if(index+1 === inputComponentNum) {
            dispatch(setModal({
                modal: modalList[0],
            }));
        }
    }, [dispatch, clearFocus, onFocus, inputComponentNum]);

    const onPressNickname = useCallback(async () => {
        try {
            await dispatch(duplicateCheck({
                nickname,
            }));    
             inputRef.current[2].focus();
        } catch(e) {
            console.log('duplicateCheck error');
        }
    }, [dispatch, nickname]);

    const onFocusNickname = useCallback(() => {
        onFocus(1);
        dispatch(clearProfileValue({
            key: 'duplicateCheckError'
        }));
    }, [dispatch, onFocus]);

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
            birth={birth}
            tall={tall}
            shape={shape}
            character={character}
            bloodType={bloodType}
            smoking={smoking}
            drinking={drinking}
            validation={validation}
            duplicateCheckFlag={duplicateCheckFlag}
            duplicateCheckLoading={duplicateCheckLoading}
            duplicateCheckError={duplicateCheckError}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onPress={onPress}
            onPressPicker={onPressPicker}
            onPressBackground={onPressBackground}
            onPressNickname={onPressNickname}
            onFocusNickname={onFocusNickname}
            onLayout={onLayout}
            onKeyboardReturn={onKeyboardReturn}
        />
    );
};

export default ProfileContainer;