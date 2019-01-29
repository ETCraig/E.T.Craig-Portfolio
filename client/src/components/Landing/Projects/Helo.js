import React from 'react';

import HeloPng from '../../../assets/Screenshot (39).png';
import styled from 'styled-components';

const HeloWrapper = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const HeloInnerWrapper = styled.div`
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

const HeloContainer = styled.div`
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
    display: block;
`;

const HeloImage = styled.img`
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
    background-image: linear-gradient(transparent 0%, #ff7a6e, #ff9770); 
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

const Helo = props => {
    return (
        <HeloWrapper>
            <HeloInnerWrapper>
                <HeloContainer>
                    <a><CardContent>
                        <ImageWrapper>
                            <HeloImage src={HeloPng} />
                        </ImageWrapper>
                        <ImageContentWrapper>
                            <CardText>
                                <Headline>Helo</Headline>
                                <Subtitle>Jul 2018</Subtitle>
                            </CardText>
                        </ImageContentWrapper>
                    </CardContent></a>
                </HeloContainer>
            </HeloInnerWrapper>
        </HeloWrapper>
    );
}

export default Helo;