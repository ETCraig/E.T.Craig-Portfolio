import React, { Component } from 'react';
import styled from 'styled-components';

import Oranges2Oranges from './Projects/Oranges2Oranges';
import EmployeeManager from './Projects/EmployeeManager';
import GymAssistant from './Projects/GymAssistant';
import GymPlan from './Projects/GymPlan';
import Helo from './Projects/Helo';
import Houser from './Projects/Houser';
import Shelfie from './Projects/Shelfie';

const LatestWrapper = styled.div`
    height: fit-content;
    max-width: 100%;
    overflow-x: hidden;
    padding: 3% 0;
    background: #F1F1F1;
    background-image: url(/static/media/topo.bd5465e5.png);
    background-blend-mode: soft-light;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

class OtherProjects extends Component {
    render() {
        return (
            <LatestWrapper>
                <Oranges2Oranges />
                <EmployeeManager />
                <GymAssistant />
                {/* <GymPlan /> */}
                <Helo />
                <Houser />
                <Shelfie />
            </LatestWrapper>
        );
    }
}

export default OtherProjects;