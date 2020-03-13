import React from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const croppedCanvas = Dimensions.get('window').width - 60;
const bigCanvasSize = parseInt((croppedCanvas / 3 * 2) + 10);
const smallCanvasSize = parseInt((bigCanvasSize - 10) / 2);

const OuterFrameBlock = styled.View`
    width: 100%;
    height: ${bigCanvasSize + smallCanvasSize + 50}px;
    padding: 20px;
    
`;

const BigHorizontalFrameBlock = styled.View`
    width: 100%;
    height: ${bigCanvasSize}px;
    flex-direction: row;
`;

const SmallHorizontalFrameBlock = styled.View`
    width: 100%;
    height: ${smallCanvasSize}px;
    flex-direction: row;
    margin-top: 10px;
`;

const VerticalFrameBlock = styled.View`
    width: ${smallCanvasSize}px;
    height: ${bigCanvasSize}px;
`;

const ImageViewBlock = styled.View`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;

    ${props => props.image && css`
        border: 0px;
    `}

    ${props => props.marginTop && css`
        margin-top: 10px;
    `};

    ${props => props.marginLeft && css`
        margin-left: 10px;
    `}
`;

const ImageTouchBlock = styled.TouchableOpacity``;

const ImageBlock = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

//  Icon.Button에서는 iconStyle={{marginRight:0}} 속성이 들어가야 중앙정렬됨
//  Icon.Button 말고 Icon에 touchable을 wrapping 하는 식으로 사용하는게 좋을듯
const ImageCanvas = React.memo(({
    type,
    index,
    image,
    marginTop,
    marginLeft,
    onPressImageCrop
}) => {

    return (
        <ImageTouchBlock onPress={() => onPressImageCrop(index)}>
            <ImageViewBlock
                image={image}
                marginTop={marginTop}
                marginLeft={marginLeft}
                size={type === 'big' ? bigCanvasSize: smallCanvasSize}
            >
                {image ?
                    (   
                        <ImageBlock source={image} />
                    ) :
                    (
                        <Icon
                            name='ios-add'
                            backgroundColor='transparent'
                            size={50}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    )
                }
            </ImageViewBlock>
        </ImageTouchBlock>
    )
});

const AuthSignUpImage = ({
    images,
    onPressImageCrop
}) => {

    return (
        <OuterFrameBlock>
            <BigHorizontalFrameBlock>
                <ImageCanvas
                    type='big'
                    index={0}
                    image={images[0]}
                    onPressImageCrop={onPressImageCrop}
                />
                <VerticalFrameBlock>
                    <ImageCanvas
                        type='small'
                        index={1}
                        image={images[1]}
                        onPressImageCrop={onPressImageCrop}
                    />
                    <ImageCanvas
                        type='small'
                        index={2}
                        image={images[2]}
                        onPressImageCrop={onPressImageCrop}
                    />
                </VerticalFrameBlock>
            </BigHorizontalFrameBlock>
            <SmallHorizontalFrameBlock>
                    <ImageCanvas
                        type='small'
                        index={3}
                        image={images[3]}
                        onPressImageCrop={onPressImageCrop}
                    />
                     <ImageCanvas
                        type='small'
                        index={4}
                        image={images[4]}
                        onPressImageCrop={onPressImageCrop}
                    />
                     <ImageCanvas
                        type='small'
                        index={5}
                        image={images[5]}
                        onPressImageCrop={onPressImageCrop}
                    />
            </SmallHorizontalFrameBlock>
        </OuterFrameBlock> 
    );
};

export default AuthSignUpImage;