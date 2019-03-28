import React from 'react';
import styled from 'styled-components';

const Inntro = styled.div`
    height: 50vh;
    display: block;
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 50vh;
    pointer-events: none;
    background-image: url('http://www.whitefieldbc.com/wp-content/uploads/WBC-Graphics-Menu-BG-Geometric-White01.jpg');
    box-sizing: inherit;
    @media (max-width: 730px) {
        min-height: 60vh;
    }
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
    width: 51.66667%;
    align-self: center;
    position: relative;
    z-index: 1;
    box-sizing: inherit;
    display: block;
    @media (max-width: 954px) {
        width: 69%;
    }
    @media (max-width: 730px) {
        width: 90%;
    }
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

const TextLine2 = styled.span`
    margin-top: -160px;
    font-weight: 100;
    color: #9ea0a6;
    white-space: pre-line;
    font-size: 56px;
    text-decoration: none;
    font-family: 'Proza Libre', sans-serif;
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
    @media (max-width: 730px) {
        font-size: 46px;
    }
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

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -540px;
    justify-content: space-evenly;
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
    return (
        <Inntro>
            <IntroWrapper>
                <InnerContainer>
                    <TextWrapper>
                        <TextInner>
                            <TextContainer>
                                <Text>
                                    <TextLine2>Currently working as a Full Stack and Backend Developer for two local Startups.</TextLine2>
                                </Text>
                            </TextContainer>
                            <BckgContainer>
                                <ImgBackContainer>
                                    <ImgBackInner></ImgBackInner>
                                </ImgBackContainer>
                            </BckgContainer>
                        </TextInner>
                        <ImgWrapper>
                        </ImgWrapper>
                    </TextWrapper>
                    <Border>
                        <BorderInner></BorderInner>
                    </Border>
                </InnerContainer>
            </IntroWrapper>
        </Inntro>
    );
}

export default Intro;