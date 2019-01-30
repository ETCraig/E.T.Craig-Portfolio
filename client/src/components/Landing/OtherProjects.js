import React, {Component} from 'react';
import styled from 'styled-components';

import FeaturedProject from './FeaturedProject';
import ProjectsIntro from './ProjectsIntro';
import EmployeeManager from './Projects/EmployeeManager';
import GymAssistant from './Projects/GymAssistant';
import GymPlan from './Projects/GymPlan';
import Helo from './Projects/Helo';
import Houser from './Projects/Houser';
import Shelfie from './Projects/Shelfie';

const LatestWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1680px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #F1F1F1;
    width: calc(100% + 24px);
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

class OtherProjects extends Component {
    render() {
        return(
            <LatestWrapper>
                <EmployeeManager />
                <GymAssistant />
                <GymPlan />
                <Helo />
                <Houser />
                <Shelfie />
            </LatestWrapper>
        );
    }
}

export default OtherProjects;