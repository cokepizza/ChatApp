import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

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
    border-bottom-color: rgba(0, 0, 0, 0.3);
`;

const ModalTitleTextBlock = styled.Text`
    color: rgba(0, 0, 0, 0.3);
    font-size: 30px;
`;

const ModalBodyBlock = styled.View`
    height: 60%;
    width: 100%;
    justify-content: center;
`;

const ModalFooterBlock = styled.View`
    height: 20%;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`;

const ButtonTouchBlock = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    align-items: center;
`;

const ButtonTextBlock = styled.Text`
    border-top-color: rgba(0, 0, 0, 0.3);
    border-top-width: 1px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
`;


const ModalPickerBlock = styled.Picker`
`;

const PickerItem = ModalPickerBlock.Item;

const Modal = ({ modalTitle, modalArr }) => {
    if(!modalArr) {
        return null;
    }

    console.log(modalArr);

    return (
        <ModalBackgroundBlock>
            <ModalBlock>
                <ModalHeaderBlock>
                    <ModalTitleTextBlock>
                        {modalTitle}
                    </ModalTitleTextBlock>
                </ModalHeaderBlock>
                <ModalBodyBlock>
                    <ModalPickerBlock>
                        {modalArr.map(item => { console.log(item); return (
                            <PickerItem
                                label={item}
                                value={item}
                            />
                        )})}
                    </ModalPickerBlock>
                </ModalBodyBlock>
                <ModalFooterBlock>
                    <ButtonTouchBlock>
                        <ButtonTextBlock>
                            Submit
                        </ButtonTextBlock>
                    </ButtonTouchBlock>
                    <ButtonTouchBlock>
                        <ButtonTextBlock>
                            Cancel
                        </ButtonTextBlock>                        
                    </ButtonTouchBlock>
                </ModalFooterBlock>
            </ModalBlock>
        </ModalBackgroundBlock>
    );
};

export default React.memo(Modal);