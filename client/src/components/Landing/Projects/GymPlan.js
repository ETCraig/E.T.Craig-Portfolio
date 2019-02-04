import React from 'react';
import styled from 'styled-components';

import GymPlanPng from '../../../assets/Screenshot (72).png';
import LaptopPng from '../../../assets/download.png';

const GymPlanWrapper = styled.div`
    min-height: 45vh;
    width: 80%;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    margin: 40px 0;
    box-shadow: 0 10px 16px -11px rgba(0,0,0,.2);
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const TitleWrapper = styled.div`
    width: 250px;
    height: 75px;
    background: black;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const Title = styled.div`
    color: #fff;
    font-size: 2em;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: initial;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const LinkWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 250px;
    width: 250px;
    height: 75px;
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const LinkTag = styled.a`
    color: inherit;
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    cursor: pointer;
`;

const Link = styled.button`
    width: 100px;
    padding: 5px 0;
    background: #000;
    color: #fff;
    margin: 0 10px;
    font-family: Europa Bold,sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    align-items: flex-start;
    text-align: center;
    box-sizing: border-box;
`;

const DetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 100px;
    margin-bottom: 25px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const Description = styled.p`
    word-wrap: break-word;
    width: 600px;
    font-size: 1.2em;
    margin-bottom: 3%;
    line-height: 170%;
    margin: 25px;
    margin-top: 75px;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: initial;
`;

const ListWrapper = styled.ul`
    list-style: none;
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
    padding-inline-start: 40px;
`;

const ListItems = styled.li`
    list-style-type: circle;
    line-height: 150%;
    font-size: 1.1em;
    margin-left: 20px;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: initial;
    display: list-item;
    text-align: -webkit-match-parent;
`;

const ImageWrapper = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    display: block;
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const ImageFirst = styled.img`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const ProjectImage = styled.img`
    position: absolute;
    top: 45px;
    left: 71px;
    width: 310px;
    height: 200px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
`;

const GymPlan = props => {
    return (
        <GymPlanWrapper>
            <TitleWrapper>
                <Title>Employee Manager</Title>
            </TitleWrapper>
            <LinkWrapper>
                <LinkTag><Link>Site</Link></LinkTag>
                <LinkTag><Link>Repo</Link></LinkTag>
            </LinkWrapper>
            <DetailsWrapper>
                <Description>
                Created on a PERN Stack (Postgres, Express, React, Node), gymPlan allows users to create unique workout routines and track their physical progress via goals and stats.
                </Description>
                <ListWrapper>
                    <ListItems>DB works with Auth0 to login and register users</ListItems>
                    <ListItems>Expansive and custom Postgres database</ListItems>
                    <ListItems>Utilizes the Stripe API for a checkout process</ListItems>
                </ListWrapper>
            </DetailsWrapper>
            <ImageWrapper>
                <ImageContainer>
                    <ImageFirst src={LaptopPng} />
                    <ProjectImage src={GymPlanPng} />
                </ImageContainer>
            </ImageWrapper>
        </GymPlanWrapper>
    );
}

export default GymPlan;