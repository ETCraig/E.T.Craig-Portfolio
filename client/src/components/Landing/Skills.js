import React, { Component } from 'react';
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
    font-family: 'Proza Libre', sans-serif;
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
    @media(max-width: 910px) {
        height: 42vh;
    }
    @media(max-width: 490px) {
        height: 50vh;
    }
    @media(max-width: 370px) {
        height: 90vh;
    }
`;

const ReactWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px;
    padding: 10px;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    :hover {
        color: #c91717;
    }
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
        return (
            <SkillsWrapper>
                <ReactWrapper>
                    <a href="https://reactjs.org/" target="blank"><ReactIcon src={ReactPng} /></a>
                    <ReactText>React</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://vuejs.org/" target="blank"><ReactIcon src={VuePng} /></a>
                    <ReactText>Vue</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://nodejs.org/en/" target="blank"><ReactIcon src={NodeJSPng} /></a>
                    <ReactText>NodeJS</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://www.mongodb.com/" target="blank"><ReactIcon src={MongoPng} /></a>
                    <ReactText>Mongo</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://www.postgresql.org/" target="blank"><ReactIcon src={PostgresPng} /></a>
                    <ReactText>Postgres</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://firebase.google.com/" target="blank"><ReactIcon src={FirebasePng} /></a>
                    <ReactText>Firebase</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://stripe.com/" target="blank"><ReactIcon src={StripePng} /></a>
                    <ReactText>Stripe</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://git-scm.com/" target="blank"><ReactIcon src={GitPng} /></a>
                    <ReactText>Git</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank"><ReactIcon src={JSPng} /></a>
                    <ReactText>JavaScript</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank"><ReactIcon src={HTMLPng} /></a>
                    <ReactText>HTML</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank"><ReactIcon src={CSSPng} /></a>
                    <ReactText>CSS</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://jestjs.io/en/" target="blank"><ReactIcon src={JestPng} /></a>
                    <ReactText>Jest</ReactText>
                </ReactWrapper>
                <ReactWrapper>
                    <a href="https://learning.getpostman.com/" target="blank"><ReactIcon src={PostManPng} /></a>
                    <ReactText>Postman</ReactText>
                </ReactWrapper>
            </SkillsWrapper>
        );
    }
}

export default Skills;