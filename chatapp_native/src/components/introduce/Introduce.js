import React from 'react';
import styled from 'styled-components/native';

const IntroduceBlock = styled.SafeAreaView`
    flex: 1;
    background: white;
`;

const IntroduceScrollViewBlock = styled.ScrollView`

`;

const PhotoFrameBlock = styled.View`
    flex-direction: row;
    height: 40px;
    justify-content: space-around;
`;

const PhotoTouchBlock = styled.TouchableOpacity``;

const PhotoImageBlock = styled.Image`

`;

const RecommandationBlock = styled.View`

`;

const OptionBlock = styled.View`
    flex-direction: row;
`;

const Introduce = () => {
    return (
        <IntroduceBlock>
            <IntroduceScrollViewBlock>
                <PhotoFrameBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock />
                    </PhotoTouchBlock>
                    <PhotoTouchBlock>
                        <PhotoImageBlock />
                    </PhotoTouchBlock>
                </PhotoFrameBlock>
                <RecommandationBlock>
                    <OptionBlock>

                    </OptionBlock>
                    <OptionBlock>
                        
                    </OptionBlock>
                </RecommandationBlock>
            </IntroduceScrollViewBlock>
        </IntroduceBlock>
    );
};

export default Introduce;