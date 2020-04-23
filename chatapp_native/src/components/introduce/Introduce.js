import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth - 24 - 60;

const IntroduceBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const IntroduceScrollViewBlock = styled.ScrollView`
    margin-left: 24px;
    margin-right: 24px;
    flex: 1;
`;

const PhotoFrameBlock = styled.View`
    flex-direction: row;
    height: 40px;
    justify-content: space-around;
`;

const PhotoTouchBlock = styled.TouchableOpacity``;

const PhotoImageBlock = styled.Image`
    width: ${cardSize}px;
    height: ${cardSize}px;
    border-radius: 10px;
    margin: 5px;
`;

const SelectionBlock = styled.Image`
    flex: 1;
`;

const RecommandationBlock = styled.View`

`;

const OptionBlock = styled.View`
    flex-direction: row;
`;

const Introduce = () => {
    return (
        <IntroduceBlock>
            <IntroduceScrollViewBlock
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            >
                <PhotoFrameBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock
                            source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}
                        />
                    </PhotoTouchBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock
                            source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}
                        />
                    </PhotoTouchBlock>
                </PhotoFrameBlock>
                <RecommandationBlock>
                    <OptionBlock>

                    </OptionBlock>
                    <OptionBlock>
                        
                    </OptionBlock>
                </RecommandationBlock>
            </IntroduceScrollViewBlock>
            <SelectionBlock>

            </SelectionBlock>
        </IntroduceBlock>
    );
};

export default Introduce;