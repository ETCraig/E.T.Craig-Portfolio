import React, {Component} from 'react';
import styled from 'styled-components';

import FeaturedImg from '../../assets/Screenshot (85).png';

const FeaturedProjectWrapper = styled.div`
    padding: 12px; 
    flex-grow: 0;
    max-width: 65%;
    flex-basis: 65%;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const FeaturedProjectInnerWrapper = styled.div`
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

const FeaturedProjectContainer = styled.div`
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

const FeaturedProjectImg = styled.img`
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
    background-image:linear-gradient(transparent 0%, rgba(55, 55, 63, 0.5) 25%, rgba(55, 55, 63, 0.75) 60%, rgb(55, 55, 63) 90%);
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

class FeaturedProject extends Component {
    render() {
        return(
            <FeaturedProjectWrapper>
            <FeaturedProjectInnerWrapper>
                <FeaturedProjectContainer>
                    <a><CardContent>
                        <ImageWrapper>
                            <FeaturedProjectImg src={FeaturedImg} />
                        </ImageWrapper>
                        <ImageContentWrapper>
                            <CardText>
                                <Headline>Oranges2Oranges</Headline>
                                <Subtitle>August 2018</Subtitle>
                            </CardText>
                        </ImageContentWrapper>
                    </CardContent></a>
                </FeaturedProjectContainer>
            </FeaturedProjectInnerWrapper>
        </FeaturedProjectWrapper>
        );
    }
}

export default FeaturedProject;