import React, {Component} from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import FeaturedProject from './FeaturedProject';
import OtherProjects1 from './OtherProjects1';
import OtherProjects2 from './OtherProjects2';

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
    height: 15vmax;
    margin: auto;
    display: flex;
    max-width: 1680px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #F8F8F8;
    box-sizing: border-box;
`;

class Landing extends Component {
    render() {
        return(
            <LandingWrapper>
                <Intro />
                <FeaturedProject />
                <OtherProjects1 />
                <OtherProjects2 />
                <SectionBottom />
            </LandingWrapper>
        );
    }
}

export default Landing;