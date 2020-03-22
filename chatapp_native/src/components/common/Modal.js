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
`;

const ModalBlock = styled.Picker``;
const ModalItem = ModalBlock.Item;

const Modal = ({ modalArr }) => {
    if(!modalArr) {
        return (
            <ModalBackgroundBlock />
        );
    }

    return (
        <ModalBackgroundBlock>
            <ModalBlock>
                {modalArr.map(item => { console.log(item); return (
                    <ModalItem
                        label={item}
                        value={item}
                    />
                )})}
            </ModalBlock>
        </ModalBackgroundBlock>
    );
};

export default React.memo(Modal);