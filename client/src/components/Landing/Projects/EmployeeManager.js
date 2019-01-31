import React from 'react';
import styled from 'styled-components';

import EmployeeManagerPng from '../../../assets/Screenshot (128).png';
import ProjectModal from './ProjectModal';

const EmployeeManagerWrapper = styled.div`
    padding: 12px; 
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const EmployeeManagerInnerWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    max-height: 469.975px;
    height: 28vw;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    &:hover {
        position: relative;
        transform: translateY(-6px);
        box-shadow: 0px 3px 15px rgba(0,0,0,0.5);
        width: 100%;
        max-width: 100%;
        max-height: 469.975px;
        height: 28vw;
        overflow: hidden;
        border-radius: 4px;
        display: flex;
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
        cursor: pointer;
    }
`;

const EmployeeManagerContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
`;

const ImageContentWrapper = styled.div`
    color: #FFF;
    width: 100%;
    bottom: 0;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
`;

const EmployeeManagerImg = styled.img`
    filter: blur(0px);
    transition: filter 500ms linear 0s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
`;

const CardText = styled.div`
    background-image:linear-gradient(transparent 0%, green);
    left: 0;
    color: #FFF;
    width: 100%;
    bottom: 0;
    padding: 40px;
    position: absolute;
    max-height: 100%;
    box-sizing: border-box;
    display: block;
`;

const Headline = styled.div`
    font-size: 1.31em;
    font-family: Trade Gothic LT;
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.03em;
    text-transform: none;
    color: #FFF;
    padding-bottom: 15px;
    box-sizing: border-box;
    display: block;
`;

const Subtitle = styled.div`
    font-size: 10px;
    font-weight: 300;
    color: #FFF;
    opacity: 0.85;
    text-transform: uppercase;
    box-sizing: border-box;
    display: block;
`;

class EmployeeManager extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }
        this.handleModal = this.handleModal.bind(this);
    }
    currentModal() {
        if(!this.state.modal) {
            return(
                <div />
            );
        } else {
            let nameString = 'Employee Manager';
            console.log(nameString)
            return(
                <div>
                    <ProjectModal name={nameString} />
                </div>
            );
        }
    }
    handleModal() {
        this.setState({modal: true})
    }
    render() {
        return (
            <EmployeeManagerWrapper>
                <EmployeeManagerInnerWrapper>
                    <EmployeeManagerContainer>
                        <a><CardContent onClick={() => this.handleModal()}>
                            <ImageWrapper>
                                <EmployeeManagerImg src={EmployeeManagerPng} />
                                {this.currentModal()}
                            </ImageWrapper>
                            <ImageContentWrapper>
                                <CardText>
                                    <Headline>Employee Manager</Headline>
                                    <Subtitle>January 2019</Subtitle>
                                </CardText>
                            </ImageContentWrapper>
                        </CardContent></a>
                    </EmployeeManagerContainer>
                </EmployeeManagerInnerWrapper>
            </EmployeeManagerWrapper>
        );
    }
}

export default EmployeeManager;