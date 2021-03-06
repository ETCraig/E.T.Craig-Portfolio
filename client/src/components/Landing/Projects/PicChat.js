import React from 'react';
import styled from 'styled-components';

import ShelfiePng from '../../../assets/Screenshot (143).png';
import LaptopPng from '../../../assets/download.png';

const ShelfieWrapper = styled.div`
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
    cursor: pointer;
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
    // margin-top: 100px;
    margin-bottom: 25px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    @media(max-width: 1380px) {
        margin-top: 0px;
    }
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
    width: 480px;
    height: 360px;
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
    top: 50px;
    left: 74px;
    width: 335px;
    height: 245px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
    @media(max-width: 498px) {
        top: 30px;
        left: 47px;
        width: 209px;
        height: 150.5px;
    }
`;

const PicChat = props => {
    return (
        <ShelfieWrapper>
            <TitleWrapper>
                <Title><h2>PicChat</h2></Title>
            </TitleWrapper>
            <LinkWrapper>
                <LinkTag href='https://fierce-waters-66786.herokuapp.com/' target='blank'><Link>Site</Link></LinkTag>
                <LinkTag href="https://github.com/ETCraig/PicChat" target="blank"><Link>Repo</Link></LinkTag>
            </LinkWrapper>
            <DetailsWrapper>
                <Description>
                    Shelfie allows the user to view four different Shelves each with four different bins containing a product with that products details, they can then view it, edit it, or delete and create a new item.
                </Description>
                <ListWrapper>
                    <ListItems>React | Javascript | NodeJS | MongoDB | Stripe API | AWS | DataUri | Redux | Jwt | Bcrypt | Express | PropTypes | CSS Grid | HTML |</ListItems>
                    <ListItems>Mobile friendly social Media app allowing users to view, like, comment, and save other users posts as well as create their own.</ListItems>
                    <ListItems>Stripe enables users to create multiple payment options and use them to subscribe to other users.</ListItems>
                </ListWrapper>
            </DetailsWrapper>
            <ImageWrapper>
                <ImageContainer>
                    <ImageFirst src={LaptopPng} />
                    <ProjectImage src={ShelfiePng} />
                </ImageContainer>
            </ImageWrapper>
        </ShelfieWrapper>
    );
}

export default PicChat;