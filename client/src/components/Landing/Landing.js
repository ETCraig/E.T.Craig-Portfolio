import React, { Component } from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import AboutMe from './AboutMe';
import SkillsHeader from './SkillsHeader';
import Skills from './Skills';
import ProjectsIntro from './ProjectsIntro';
import OtherProjects from './OtherProjects';

const LandingWrapper = styled.div`
    max-width: 1920px;
    margin: auto;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
    background-color: #F1F1F1;
`;

const SectionBottom = styled.div`
    // height: 15vmax;
    // margin: auto;
    // display: flex;
    // max-width: 1680px;
    // align-items: center;
    // flex-direction: column;
    // justify-content: center;
    // background-color: #F8F8F8;
    // box-sizing: border-box;
`;

class Landing extends Component {
    render() {
        return (
            <LandingWrapper>
                <Intro />
                <AboutMe />
                <SkillsHeader />
                <Skills />
                <ProjectsIntro />
                <OtherProjects />
                <SectionBottom />
            </LandingWrapper>
        );
    }
}

export default Landing;