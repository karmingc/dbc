import React from 'react'
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
import { font } from "style/text.js"
import { layout } from "style/layout.js"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${font.size.large};    
    width: ${layout.desktop.width};
    height: ${layout.desktop.height};
    max-width: ${layout.desktop.maxWidth};    
    margin: auto;  
    @media only screen and (max-width: 768px) {
        flex-direction: column;        
        justify-content: center;
        div:last-child {
            margin-top: 15px;
        }
    };    
`
const HeaderTitle = styled(Link)`    
    font-size: ${font.size.medium};
    font-weight: ${font.weight.bold};
    color: black;
    text-decoration: none;
`

const NavContainer = styled.div`    
    display: flex;    
    
`
const OptionsTitle = styled(Link)`
    font-size: ${font.size.small};
    color: ${props => props.option === "true" ? 'black' : '#848484'}; 
    margin-left: 45px;
    text-decoration: none;
    transition: color ease 0.5s;    
    :hover {        
        color: black;        
    };
    :active {
        color: grey;
        /* box-shadow: 0 0 25px 1px #f0f0f0; */
    };
    :first-child {
        margin-left: 0px;
    }
`

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: '/'
        }
    }

    componentDidMount() {
        // sets initial path
        this.setState({
            path: location.pathname
        });
    }

    navChoose = (option) => {
        let result = option === "Home" ? '/' : '/' + option
        this.setState({
            path: result
        })
    }

    render() {
        const options = ["Home", "About", "Menu", "Contact"]
        return (
            <Container>
                <HeaderTitle
                    to="/"
                    onClick={() => { this.navChoose("Home") }}
                >
                    Dragon's Beard Candy
                </HeaderTitle>
                <NavContainer>
                    {options.map(d => {
                        return (
                            <OptionsTitle
                                option={
                                    this.state.path === '/' + d
                                        ? "true"
                                        : this.state.path === '/' && d === "Home"
                                            ? "true"
                                            : "false"}
                                to={d === "Home" ? '/' : '/' + d}
                                onClick={() => { this.navChoose(d) }}>
                                {d}
                            </OptionsTitle>
                        )
                    })}
                </NavContainer>
            </Container>
        )
    }

}