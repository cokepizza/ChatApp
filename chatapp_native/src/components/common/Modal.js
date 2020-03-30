import React from 'react';
import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';
import SelectionContainer from '../../containers/common/SelectionContainer';

const ModalBackgroundBlock = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    justify-content: center;
    align-items: center;
`;

const ModalBlock = styled.View`
    height: 60%;
    width: ${Dimensions.get('window').width / 3 * 2}px;
    margin-bottom: 45px;
    background: white;
    border-radius: 20px;
`;

const ModalHeaderBlock = styled.View`
    height: 26%;
    width: 100%;
    padding-left: 10%;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const ModalViewBlock = styled.View`
    ${props => props.marginTop && css`
        margin-top: 5px;
    `}
`;

const ModalTitleTextBlock = styled.Text`
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    font-size: 20px;
`;

const ModalSubTitleTextBlock = styled.Text`
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
`;

const ModalBodyBlock = styled.View`
    height: 60%;
    width: 100%;
    justify-content: center;
`;

const ModalFooterBlock = styled.View`
    height: 14%;
    width: 100%;
    border-top-width: 1px;
    border-top-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    flex-direction: row;
`;

const ButtonTouchBlock = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ButtonFrameBlock = styled.View`
    flex: 1;
    ${props => props.borderRight && css`
        border-right-width: 1px;
        border-right-color: rgba(0, 0, 0, 0.1);
    `}
`;

const ButtonTextBlock = styled.Text`
    border-top-color: rgba(0, 0, 0, 0.3);
    border-top-width: 1px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
`;

const PickerFrameBlock = styled.View`
    padding: 20px;
    flex-direction: row;
`;

const ModalPickerBlock = styled.Picker`
    flex:1;
`;

const PickerItem = ModalPickerBlock.Item;

const Modal = ({
    name,
    type,
    list,
    range,
    unit,
    detail,
    value,
    onPressSubmit,
    onPressCancel,
    onValueChange
}) => {
    const rangeList = [];

    if(range) {
        range.forEach((obj, index) => {
            let rangeItem = [];
            for(let i=obj.s; i<=obj.e; ++i) {
                let iStr = `${i}`;
                if(i < 10) {
                    iStr = '0' + iStr;
                }
                if(unit) {
                    iStr = iStr + `${unit[index]}`;
                }
                rangeItem.push(iStr);
            }
            rangeList.push(rangeItem);
        })
    };

    return (
        <ModalBackgroundBlock>
            <ModalBlock>
                <ModalHeaderBlock>
                    <ModalViewBlock>
                        <ModalTitleTextBlock>
                            {name}
                        </ModalTitleTextBlock>
                    </ModalViewBlock>
                    {detail && (
                        <ModalViewBlock marginTop={1}>
                            <ModalSubTitleTextBlock>
                                {detail}
                            </ModalSubTitleTextBlock>
                        </ModalViewBlock>
                    )}
                </ModalHeaderBlock>
                <ModalBodyBlock>
                    {type === 'picker' && list && (
                        <PickerFrameBlock>
                            <ModalPickerBlock
                                selectedValue={value[0]}
                                onValueChange={(selectedValue, index) => onValueChange(selectedValue, index, 0)}
                            >
                                {list && list.map(item => (
                                    <PickerItem
                                        key={item}
                                        label={item}
                                        value={item}
                                    />
                                ))}
                            </ModalPickerBlock>
                        </PickerFrameBlock>
                    )}
                    {type === 'picker' && range && (
                        <PickerFrameBlock>
                            {rangeList.map((rangeItem, modalIndex) => (
                                <ModalPickerBlock
                                    key={`modal_${modalIndex}`}
                                    selectedValue={value[modalIndex]}
                                    onValueChange={(selectedValue, itemIndex) => onValueChange(selectedValue, itemIndex, modalIndex)}
                                >
                                    {rangeItem.map(item => (
                                        <PickerItem
                                            key={item}
                                            label={item}
                                            value={item}
                                        />
                                    ))}
                                </ModalPickerBlock>
                            ))}
                        </PickerFrameBlock>
                    )}
                    {type === 'selection' && (
                        <SelectionContainer />
                    )}
                </ModalBodyBlock>
                <ModalFooterBlock>
                    <ButtonFrameBlock borderRight={1}>
                        <ButtonTouchBlock onPress={onPressCancel}>
                            <ButtonTextBlock>
                                취소
                            </ButtonTextBlock>                        
                        </ButtonTouchBlock>
                    </ButtonFrameBlock>
                    <ButtonFrameBlock>
                        <ButtonTouchBlock onPress={onPressSubmit}>
                            <ButtonTextBlock>
                                확인
                            </ButtonTextBlock>
                        </ButtonTouchBlock>
                    </ButtonFrameBlock>
                </ModalFooterBlock>
            </ModalBlock>
        </ModalBackgroundBlock>
    );
};

export default React.memo(Modal);