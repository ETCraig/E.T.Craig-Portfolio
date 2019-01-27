import React from 'react';
import styled from 'styled-components';

import SoftImg from '../../assets/2257d41e69aa53b.jpg'

const IntroWrapper = styled.div`
    width: 100%;
    min-height: 45vw;
    display: block;
`;

const ImgContainer = styled.div`
    margin-top: 45px;
    width: 58%;
    float: right;
    height: 100%;
    position: relative;
`;

const IntroImg = styled.img`
    vertical-align: middle;
    background-position: 0% 0%;
    word-spacing: 0px;
    height: 500.2px;
    width: 52.9vw;
    max-width: 100%;
    display: initial;
`;

const IntroTextWrap = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    align-content: center;
    height: 691.2px
    box-sizing: border-box;
    padding: 3em 2em 2em;
`;

const InnerWrap = styled.div`

`;

const IntroText = styled.h4`

`;

const Intro = props => {
    return(
        <IntroWrapper>
            <ImgContainer>
                <IntroImg src={SoftImg} />
            </ImgContainer>
            <IntroTextWrap>
                <InnerWrap>
                    <IntroText>Ever Learning Full Stack Software Development</IntroText>
                </InnerWrap>
                <InnerWrap>
                    <IntroText>Currently working at SideCoach and Busy Human</IntroText>
                </InnerWrap>
            </IntroTextWrap>
        </IntroWrapper>
    );
}

export default Intro;