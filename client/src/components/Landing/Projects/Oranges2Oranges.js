import React from 'react';
import styled from 'styled-components';

import Oranges2OrangesPng from '../../../assets/Screenshot (85).png';
import LaptopPng from '../../../assets/laptop_PNG5887.png';
import SitePng from '../../../assets/icons8-geography-24.png';

const Oranges2OrangesWrapper = styled.div`
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
    font-family: 'Ubuntu', sans-serif;
    @media(max-width: 1380px) {
        width: 80%
        min-height: 85vh;
        flex-direction: column;
    }
    @media(max-width: 633px) {
        min-height: 90vh;
    }
    @media(max-width: 606px) {
        min-height: 100vh;
    }
`;

const TitleWrapper = styled.div`
    width: 250px;
    height: 75px;
    background: #CCCCCC;
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
    @media(max-width: 606px) {
        flex-direction: column;
    }
    @media(max-width: 529px) {
        left: 180px;
    }
    @media(max-width: 443px) {
        left: 155px;
    }
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
`;

const Link = styled.button`
    width: 100px;
    padding: 5px 0;
    background: #c91717;
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
    @media(max-width: 443px) {
        width: 50px
    }
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
    // word-wrap: break-word;
    max-width: 600px;
    font-size: 1.2em;
    margin-bottom: 3%;
    line-height: 170%;
    margin: 25px;
    margin-top: 75px;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: initial;
    font-family: 'Lora', serif;
`;

const ListWrapper = styled.ul`
    max-width: 640px;
    max-width: 90%;
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
    font-family: 'Lora', serif;
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
    right: 50px;
    @media(max-width: 1380px) {
        right: 0px;
        top: 10px;
    }
    @media(max-width: 378px) {
        right: 0px;
        top: 0px;
    }
`;

const ImageFirst = styled.img`
    width: 390px;
    height: 260px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    @media(max-width: 498px) {
        width: 300px;
        height: 220px;
    }
`;

const ProjectImage = styled.img`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 374px;
    height: 204px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    @media(max-width: 498px) {
        top: 7px;
        left: 6px;
        width: 289px;
        height: 172.5px;
    }
`;

const Oranges2Oranges = props => {
    return (
        <Oranges2OrangesWrapper>
            <TitleWrapper>
                <Title><h2>Oranges2Oranges</h2></Title>
            </TitleWrapper>
            <LinkWrapper>
                <LinkTag><Link>Site</Link></LinkTag>
                <LinkTag href="https://github.com/rwbrockhoff/oranges" target="blank"><Link>Repo</Link></LinkTag>
            </LinkWrapper>
            <DetailsWrapper>
                <Description>
                    A group developed responsive game based on Apples to Apples. Built mobile-first in React and implementing other technologies including socket.io and redux.
                </Description>
                <ListWrapper>
                    <ListItems>React | JSX | Javascript | HTML5 | NodeJS | CSS3 | Redux | Axios | PostgresSQL | Massive | Express | Web Sockets | Stripe | React-Sound</ListItems>
                    <ListItems>Incorporates multiple CSS3 and dependency based animations throughout the application and is mobile friendly.</ListItems>
                    <ListItems>Used Web Sockets to allow multiple users to play the same game together and see each others actions in real time.</ListItems>
                </ListWrapper>
            </DetailsWrapper>
            <ImageWrapper>
                <ImageContainer>
                    <ImageFirst src={LaptopPng} />
                    <ProjectImage src={Oranges2OrangesPng} />
                </ImageContainer>
            </ImageWrapper>
        </Oranges2OrangesWrapper>
    );
}

export default Oranges2Oranges;