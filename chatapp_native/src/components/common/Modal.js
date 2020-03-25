import React from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

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
    height: 50%;
    width: ${Dimensions.get('window').width / 3 * 2}px;
    background: white;
    border-radius: 10px;
`;

const ModalHeaderBlock = styled.View`
    height: 20%;
    width: 100%;
    padding-left: 10%;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const ModalTitleTextBlock = styled.Text`
    color: rgba(0, 0, 0, 0.3);
    font-size: 30px;
`;

const ModalBodyBlock = styled.View`
    height: 65%;
    width: 100%;
    justify-content: center;
`;

const ModalFooterBlock = styled.View`
    height: 15%;
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
    width: 50%;
    ${props => props.marginRight && css`
        border-right-width: 1px;
        border-right-color: rgba(0, 0, 0, 0.1);
    `}
`;

const ButtonTextBlock = styled.Text`
    border-top-color: rgba(0, 0, 0, 0.3);
    border-top-width: 1px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
`;


const ModalPickerBlock = styled.Picker``;

const PickerItem = ModalPickerBlock.Item;

const Modal = ({
    name,
    type,
    list,
    value,
    onPressSubmit,
    onPressCancel,
    onValueChange
}) => {

    return (
        <ModalBackgroundBlock>
            <ModalBlock>
                <ModalHeaderBlock>
                    <ModalTitleTextBlock>
                        {name}
                    </ModalTitleTextBlock>
                </ModalHeaderBlock>
                <ModalBodyBlock>
                    {type === 'picker' ? (
                        <ModalPickerBlock
                            selectedValue={value}
                            onValueChange={(selectedValue, index) => onValueChange(selectedValue, index)}
                        >
                            {list && list.map(item => (
                                <PickerItem
                                    key={item}
                                    label={item}
                                    value={item}
                                />
                            ))}
                        </ModalPickerBlock>
                    ): (
                        <>
                        </>
                    )}
                </ModalBodyBlock>
                <ModalFooterBlock>
                    <ButtonFrameBlock marginRight={1}>
                        <ButtonTouchBlock onPress={onPressSubmit}>
                            <ButtonTextBlock>
                                확인
                            </ButtonTextBlock>
                        </ButtonTouchBlock>
                    </ButtonFrameBlock>
                    <ButtonFrameBlock>
                        <ButtonTouchBlock onPress={onPressCancel}>
                            <ButtonTextBlock>
                                취소
                            </ButtonTextBlock>                        
                        </ButtonTouchBlock>
                    </ButtonFrameBlock>
                </ModalFooterBlock>
            </ModalBlock>
        </ModalBackgroundBlock>
    );
};

export default React.memo(Modal);