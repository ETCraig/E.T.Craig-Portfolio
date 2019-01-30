import React, {Component} from 'react';
import styled from 'styled-components';

import ReactPng from '../../assets/react.svg';
import VuePng from '../../assets/logo-vue-js.png';
import NodeJSPng from '../../assets/nodejs1-300x250.png';
import MongoPng from '../../assets/mongodb-300x300.png';
import PostgresPng from '../../assets/postgresql-5-569524.png';
import FirebasePng from '../../assets/1_R4c8lHBHuH5qyqOtZb3h-w.png';
import StripePng from '../../assets/stripe-2-498440.png';
import GitPng from '../../assets/git-15-896383.png';
import JSPng from '../../assets/logo.png';
import HTMLPng from '../../assets/html-5-icon.png';
import CSSPng from '../../assets/css-3-icon.png';
import JestPng from '../../assets/jest-logo-F9901EBBF7-seeklogo.com.png';
import PostManPng from '../../assets/postman-icon.png';


const SkillsWrapper = styled.div`
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    background-color: white;
`;

const ReactWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const ReactIcon = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const ReactText = styled.p`
    margin-top: 10px;
    line-height: 150%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;


class Skills extends Component {
    render() {
        return(
            <SkillsWrapper>
                <ReactWrapper>
                    <ReactIcon src={ReactPng} />
                    <ReactText>React</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={VuePng} />
                    <ReactText>Vue</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={NodeJSPng} />
                    <ReactText>NodeJS</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={MongoPng} />
                    <ReactText>Mongo</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={PostgresPng} />
                    <ReactText>Postgres</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={FirebasePng} />
                    <ReactText>Firebase</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={StripePng} />
                    <ReactText>Stripe</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={GitPng} />
                    <ReactText>Git</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={JSPng} />
                    <ReactText>JavaScript</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={HTMLPng} />
                    <ReactText>HTML</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={CSSPng} />
                    <ReactText>CSS</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={JestPng} />
                    <ReactText>Jest</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <ReactIcon src={PostManPng} />
                    <ReactText>Postman</ReactText>
                </ReactWrapper>
            </SkillsWrapper>
        );
    }
}

export default Skills;