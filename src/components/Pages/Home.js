/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from 'react';
import styled from "@emotion/styled";
import { layout } from "style/layout.js"
import { font } from "style/text.js"
import {
    HalfImage,
    HorizontalSplitContainer
} from 'components/Pages/Common/PictureLayout.js'

export const Container = styled.div`
    display: flex;  
    flex-direction: column;  
    width: ${layout.desktop.width};        
    max-width: ${layout.desktop.maxWidth};     
    margin: auto;    
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
`

const ContainerHeaderTitle = styled.div`
    font-size: ${font.size.small}
`

const SmallImageContainer = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: space-between;       
    width: calc(50% - 5px);
    height: auto;     
    @media only screen and (max-width: 768px) {
        width: 100%;
    }        
`

const SmallImage = styled.img`    
    width: 100%; 
    height: calc(50% - 5px);     
`

export default class Home extends React.Component {
    render() {
        return (
            <Container
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                <ContainerHeader>
                    <ContainerHeaderTitle>52B La Gauchetiere, Montreal, Quebec</ContainerHeaderTitle>
                    <ContainerHeaderTitle>Monday - Sunday 12PM - 7PM</ContainerHeaderTitle>
                </ContainerHeader>
                <HorizontalSplitContainer>
                    <HalfImage
                        src={require("assets/media/main/demonstrate.jpg")}
                        alt="Demonstrate"
                    />
                    <SmallImageContainer>
                        <SmallImage
                            src={require("assets/media/main/wrap.jpg")}
                            alt="Wrap"
                        />
                        <SmallImage
                            src={require("assets/media/main/peanuts.jpg")}
                            alt="Peanuts"
                        />
                    </SmallImageContainer>
                </HorizontalSplitContainer>
            </Container>
        )
    }
}