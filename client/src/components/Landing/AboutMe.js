import React from 'react';
import styled from 'styled-components';
import MeImage from '../../assets/20180613_101032.jpg';

const AboutMeWrapper = styled.div`
    height: 15vh max;
    margin: auto;
    display: flex;
    max-width: 1680px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    font-size: 16px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
    padding: 35px;
`;

const ProImage = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 65px;
    margin-bottom: 25px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const AboutMeTextWrapper = styled.div`
    max-width: 500px;
    font-size: 14px;
    font-family: 'Lora', serif;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
`;

const AboutMeText = styled.p`
    font-size: 1.2em;
    line-height: 200%;
    text-align: center;
`;

const AboutMe = props => {
    return (
        <AboutMeWrapper>
            <AboutMeTextWrapper>
                <AboutMeText>
                    <ProImage src={MeImage} />
                    <br />
                    I'm a full stack web developer with an emphasis on back-end and data flow. I've been learning and practicing code for two years now and have found myself working on two different Startup companies. I'm alwasy working on a new project on my own, usually focused on implementing a new and popular technology. I've received two online certificates in Web-Design and Javascript, and have previously graduated from DevMountain coding bootcamp.
                </AboutMeText>
            </AboutMeTextWrapper>
        </AboutMeWrapper>
    );
}

export default AboutMe;