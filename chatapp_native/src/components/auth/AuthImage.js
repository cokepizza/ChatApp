import React from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const croppedCanvas = Dimensions.get('window').width - 60;
const bigCanvasSize = parseInt((croppedCanvas / 3 * 2) + 10);
const smallCanvasSize = parseInt((bigCanvasSize - 10) / 2);

const OuterFrameBlock = styled.View`
    flex: 1;
    /* bigCanvasSize + smallCanvasSize + 50 까지가 frame 영역 */
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

const LayoutFrameBlock = styled.View`
    position: relative;
`;

const TextViewBlock = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
`;

const TextBlock = styled.Text`
    font-size: 12px;
    color: white;
`

const ImageViewBlock = styled.View`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
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
    loading,
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
                {!loading ? (
                    image ?
                        (
                            <ImageBlock source={image} />
                        )
                        : (
                            <Icon
                                name='ios-add'
                                backgroundColor='transparent'
                                size={50}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'rgba(0, 0, 0, 0.2)',
                                }}
                            />
                        )
                )
                : (
                    <ActivityIndicator
                        color='rgba(0, 0, 0, 0.3)'
                        size='large'
                    />
                )}
            </ImageViewBlock>
        </ImageTouchBlock>
    )
});

const AuthImage = ({
    images,
    loadings,
    onPressImageCrop,
}) => {

    return (
        <OuterFrameBlock>
            <BigHorizontalFrameBlock>
                <LayoutFrameBlock>
                    <ImageCanvas
                        type='big'
                        index={0}
                        image={images[0]}
                        loading={loadings[0]}
                        onPressImageCrop={onPressImageCrop}
                    />
                    <TextViewBlock>
                        <TextBlock>
                            Main
                        </TextBlock>
                    </TextViewBlock>
                </LayoutFrameBlock>
                <VerticalFrameBlock>
                    <ImageCanvas
                        type='small'
                        index={1}
                        image={images[1]}
                        loading={loadings[1]}
                        onPressImageCrop={onPressImageCrop}
                    />
                    <ImageCanvas
                        type='small'
                        index={2}
                        image={images[2]}
                        loading={loadings[2]}
                        onPressImageCrop={onPressImageCrop}
                    />
                </VerticalFrameBlock>
            </BigHorizontalFrameBlock>
            <SmallHorizontalFrameBlock>
                    <ImageCanvas
                        type='small'
                        index={3}
                        image={images[3]}
                        loading={loadings[3]}
                        onPressImageCrop={onPressImageCrop}
                    />
                     <ImageCanvas
                        type='small'
                        index={4}
                        image={images[4]}
                        loading={loadings[4]}
                        onPressImageCrop={onPressImageCrop}
                    />
                     <ImageCanvas
                        type='small'
                        index={5}
                        image={images[5]}
                        loading={loadings[5]}
                        onPressImageCrop={onPressImageCrop}
                    />
            </SmallHorizontalFrameBlock>
        </OuterFrameBlock> 
    );
};

export default AuthImage;