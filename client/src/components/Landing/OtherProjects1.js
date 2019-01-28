import React, {Component} from 'react';
import styled from 'styled-components';

import EmployeeManager from './OtherOne/EmployeeManager';

const LatestWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1680px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #F8F8F8;
    width: calc(100% + 24px);
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

class OtherProjects1 extends Component {
    render() {
        return(
            <LatestWrapper>
                <EmployeeManager />
            </LatestWrapper>
        );
    }
}

export default OtherProjects1;