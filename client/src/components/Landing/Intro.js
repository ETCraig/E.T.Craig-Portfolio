import React from 'react';
import styled from 'styled-components';

const Inntro = styled.div`
    height: 800px;
    display: block;
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    pointer-events: none;
    background-color: #F1F1F1;
    box-sizing: inherit;
`;

const IntroWrapper = styled.div`
    box-sizing: inherit;
    display: block;
`;

const InnerContainer = styled.div`
    pointer-events: all;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    box-sizing: inherit;
    display: block;
`;

const TextWrapper = styled.div`
    padding-left: 70px;
    padding-right: 70px;
    max-width: 1430px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    box-sizing: inherit;
    display: block;
`;

const TextInner = styled.div`
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-left: -15px;
    margin-right: -15px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100vh;
`;

const TextContainer = styled.div`
    margin-top: 70px;
    -webkit-box-flex: 0;
    flex: none;
    padding-left: 15px;
    padding-right: 15px;
    width: 41.66667%;
    align-self: center;
    position: relative;
    z-index: 1;
    box-sizing: inherit;
    display: block;
`;

const Text = styled.div`
    margin: 0;
    padding: 120px 0 0;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    align-items: flex-start;
    line-height: 2;
    perspective: 800px;
    box-sizing: inherit;
`;

const TextLine1 = styled.span`
    font-size: 56px;
    color: inherit;
    text-decoration: none;
    font-family: Tisa Pro,sans-serif;
    font-weight: 200;
    letter-spacing: -.03em;
    line-height: 1.07143;
    box-sizing: inherit;
    background-position: 1694px 0px;
    display: inline;
    position: relative;
    background-image: linear-gradient(0deg,rgba(0,0,0,.5) 2px,hsla(0,0%,100%,0) 0);
    background-repeat: no-repeat;
    background-size: 100% 90%;
    will-change: background-position;
`;

const TextLine2 = styled.span`
    margin-top: 40px;
    font-weight: 100;
    color: #9ea0a6;
    white-space: pre-line;
    font-size: 56px;
    text-decoration: none;
    font-family: Tisa Pro,sans-serif;
    letter-spacing: -.03em;
    line-height: 1.07143;
    box-sizing: inherit;
    background-position: 1694px 0px;
    display: inline;
    position: relative;
    background-image: linear-gradient(0deg,rgba(0,0,0,.5) 2px,hsla(0,0%,100%,0) 0);
    background-repeat: no-repeat;
    background-size: 100% 90%;
    will-change: background-position;
`;

const BckgContainer = styled.div`
    -webkit-box-flex: 0;
    flex: none;
    padding-left: 15px;
    padding-right: 15px;
    width: 58.33333%;
    align-self: center;
    position: static;
    box-sizing: inherit;
`;

const BckgCircle = styled.div`
    top: -15%;
    padding-top: 0;
    width: 105vw;
    height: 105vw;
    max-width: 120vh;
    max-height: 120vh;
    right: -50px;
    position: absolute;
    transform: translateX(50%);
    box-sizing: inherit;
    display: block;
`;

const BckgCircleInner = styled.div`
    background-color: rgb(192, 192, 192);
    transform: matrix(1, 0, 0, 1, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: inherit;
    display: block;
`;

const ImgBackContainer = styled.div`
    padding: 0;
    max-width: none;
    height: 80vh;
    margin-right: 0;
    box-sizing: inherit;
    display: block;
`;

const ImgBackInner = styled.div`
    display: none;
    position: relative;
    padding-top: 150%;
    box-sizing: inherit;
`;

const Img = styled.img`
    display: block;
    transform: matrix(1, 0, 0, 1, 0, 0);
    height: 480px;
    width: 700px;
    left: 775px;
    top: 111px;
    transition: transform .5s ease-in-out,-webkit-transform .5s ease-in-out;
    color: inherit;
    text-decoration: none;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
    background: 50% no-repeat;
    background-size: cover;
    box-sizing: inherit;
`;

const Border = styled.div`
    display: block;
    transform: translate(0%, -100%) matrix(1, 0, 0, 1, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
    background: #fff;
    box-sizing: inherit;
`;

const BorderInner = styled.div`
    background-color: rgb(255, 164, 76);
    transform: matrix(1, 0, 0, 1, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    box-sizing: inherit;
    display: block;
`;

const Intro = props => {
    return(
        <Inntro>
            <IntroWrapper>
                <InnerContainer>
                    <TextWrapper>
                        <TextInner>
                            <TextContainer>
                                <Text>
                                    <TextLine1>Ever Learning Full Stack Software Developer</TextLine1>
                                    <TextLine2>Currently working at SideCoach and Bussy Human</TextLine2>
                                </Text>
                            </TextContainer>
                            <BckgContainer>
                                <BckgCircle>
                                    <BckgCircleInner></BckgCircleInner>
                                </BckgCircle>
                                <ImgBackContainer>
                                    <ImgBackInner></ImgBackInner>
                                </ImgBackContainer>
                            </BckgContainer>
                        </TextInner>
                    </TextWrapper>
                    <Img src="https://southseadesigns.com/wp-content/uploads/2018/06/software-application-development.png"/>
                    <Border>
                        <BorderInner></BorderInner>
                    </Border>
                </InnerContainer>
            </IntroWrapper>
        </Inntro>
    );
}

export default Intro;