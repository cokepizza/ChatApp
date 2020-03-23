import React from 'react';
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
    height: 500px;
    width: 300px;
    z-index: 100;
    background: red;
`;

const ModalPickerBlock = styled.Picker`
`;

const PickerItem = ModalPickerBlock.Item;

const Modal = ({ modalArr }) => {
    if(!modalArr) {
        return null;
    }

    console.log(modalArr);

    return (
        <>
        <ModalPickerBlock>
            <ModalPickerBlock.Item label='hhhh' value='java' />
            <ModalPickerBlock.Item label='java' value='java' />
            <ModalPickerBlock.Item label='java' value='java' />
            <ModalPickerBlock.Item label='java' value='java' />
            <ModalPickerBlock.Item label='java' value='java' />
        </ModalPickerBlock>

        <ModalBackgroundBlock>
            <ModalBlock>
                <ModalPickerBlock>
                    {modalArr.map(item => { console.log(item); return (
                        <PickerItem
                            label={item}
                            value={item}
                        />
                    )})}
                </ModalPickerBlock>
            </ModalBlock>
        </ModalBackgroundBlock>
        </>
    );
};

export default React.memo(Modal);