import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    box-sizing: border-box;
    display: block;
`;

const FooterContainer = styled.div`
    color: black;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: .50em;
    box-sizing: border-box;
    display: block;
`;

const FooterDir = styled.div`
    display: flex;
    padding: 4vh 5vw;
    justify-content: space-between;
    background-color: #fff;
    box-sizing: border-box;
`;

const LeftFooter = styled.div`

`;

const RightFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LinkItem = styled.div`
    margin-right: 50px;
    &:hover {
        cursor: pointer;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
    :hover{
        color: #c91717;
    }
`;

const Footer = props => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterDir>
                    <LeftFooter>
                        @2019 E.T.Craig Inc
                </LeftFooter>
                    <RightFooter>
                        <LinkItem>
                            <Link href="https://www.linkedin.com/in/ethan-craig-93000015a/" target="_blank">LinkedIn</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href="https://github.com/ETCraig" target="_blank">Github</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href="https://wakatime.com/@ETCraig?rank=me&page=1&board=60d90404-f4ff-4b8b-8f5c-d3879bd23503" target="_blank">Wakatime</Link>
                        </LinkItem>
                    </RightFooter>
                </FooterDir>
            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;