/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import React from 'react';
import { Container } from 'components/Pages/Home.js'
import styled from "@emotion/styled";
import { layout } from 'style/layout.js'
import {
    FullImage,
    HalfImage,
    HorizontalSplitContainer
} from 'components/Pages/Common/PictureLayout.js'
import {
    TextTitle,
    TextDescription
} from 'components/Pages/Common/TextLayout.js'


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto auto ${layout.block.bottom};
    width: 75%;
`

export default class About extends React.Component {
    render() {
        return (
            <Container>
                <TextContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <TextTitle>Hong Kong - Montreal</TextTitle>
                    <TextDescription>
                        In 1991, Hong Kong born Johnny Chin brought to Montreal a
                        mysterious confectionery called Dragon’s Beard Candy, a dessert
                        that used to the Emperors of China.
                        </TextDescription>
                </TextContainer>
                <FullImage
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    src={require("assets/media/about/kid.jpg")}
                    alt="Kid"
                />
                <TextContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <TextTitle>Sugar</TextTitle>
                    <TextDescription>
                        Using corn syrup and cornstarch as its core, the once
                        before hardened block of sugar is turned into 8,192 thin
                        and delicate strands through stretching and doubling.
                    </TextDescription>
                </TextContainer>
                <HorizontalSplitContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <HalfImage
                        src={require("assets/media/about/sirop.jpg")}
                        alt="Syrup"
                    />
                    <HalfImage
                        src={require("assets/media/about/show.jpg")}
                        alt="Show"
                    />
                </HorizontalSplitContainer>
                <TextContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <TextTitle>Mixture</TextTitle>
                    <TextDescription>
                        To add a twist of taste, there is a mixture of peanuts,
                        coconuts, sesames and slight touch of chocolate within the
                        wrapped sugar strands.
                    </TextDescription>
                </TextContainer>
                <HorizontalSplitContainer
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    css={css`
                        margin-bottom: 10px; 
                    `}
                >
                    <HalfImage
                        src={require("assets/media/about/complete.jpg")}
                        alt="Complete"
                    />
                    <HalfImage
                        src={require("assets/media/about/peanuts.jpg")}
                        alt="Peanuts"
                    />
                </HorizontalSplitContainer>
                <FullImage
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    src={require("assets/media/about/candy.png")}
                    alt="Candy"
                />
            </Container>
        )
    }
}