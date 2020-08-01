import React from 'react';
import styled from "@emotion/styled";
import { Container } from 'components/Pages/Home.js'
import {
    FullImage as ImportFullImage,
    HorizontalSplitContainer as ImportHorizontalSplitContainer
} from 'components/Pages/Common/PictureLayout.js'
import {
    TextTitle as ImportTextTitle,
    TextDescription
} from 'components/Pages/Common/TextLayout.js'

const HorizontalSplitContainer = styled(ImportHorizontalSplitContainer)`    
    margin-bottom: 10px;        
`

const FullImage = styled(ImportFullImage)`
    margin-bottom: 10px;
    height: 75%;
    
`
const TextTitle = styled(ImportTextTitle)`
    margin-bottom: 0px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;    
    width: calc(50% - 5px);         
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }        
`

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <HorizontalSplitContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <ItemContainer>
                        <FullImage
                            src={require('assets/media/menu/candy.png')}
                            alt="Candy"
                        />
                        <TextTitle>Dragon’s Beard Candy</TextTitle>
                        <TextDescription>
                            6 pieces
                            /
                            $ 4.50
                        </TextDescription>
                    </ItemContainer>
                    <ItemContainer>
                        <FullImage
                            src={require('assets/media/menu/dumpling.jpg')}
                            alt="Dumpling"
                        />
                        <TextTitle>Sweet Dumpling</TextTitle>
                        <TextDescription>
                            10 pieces
                            /
                            $ 4.50
                        </TextDescription>
                    </ItemContainer>
                </HorizontalSplitContainer>
                <HorizontalSplitContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <ItemContainer>
                        <FullImage
                            src={require('assets/media/menu/eggball_2.jpg')}
                            alt="Egg Ball"
                        />
                        <TextTitle>Egg Ball</TextTitle>
                        <TextDescription>
                            1 order
                            /
                            $ 4.00
                        </TextDescription>
                    </ItemContainer>
                    <ItemContainer>
                        <FullImage
                            src={require('assets/media/menu/waffle.jpg')}
                            alt="Waffle"
                        />
                        <TextTitle>Waffle HK Style</TextTitle>
                        <TextDescription>
                            1 order
                            /
                            $ 4.50
                        </TextDescription>
                    </ItemContainer>
                </HorizontalSplitContainer>
            </Container>
        )
    }
}