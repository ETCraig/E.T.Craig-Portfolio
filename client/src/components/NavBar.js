import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const NavContainer = styled.div`
    font-size: 16px;
    width: 100%;
    height: 60px;
    display: flex;
    z-index: 1100;F
    position: fixed;
    overflow: hidden;
`;

const NavWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 35px;
    flex-direction: row;
`;

const TittleWrapper = styled.div`
    width: 180px;
    border-bottom: 0;
    padding: 0;
`;
const NameTitle = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    line-height: 26.08px;
    word-spacing: 0px;
    text-decoration: none solid rgb(16, 93, 88);
    height: 13.675px;
    width: 90px;
    display: inline;
    overflow: hidden;
    cursor: pointer;
    color: black;
    margin-left: 15px;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    flex-direction: row;
`;

const NavItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavItem = styled.h4`
    color: black;
    margin-right: 50px;
    &:hover {
        cursor: pointer;
    }
`;

const NavBar = props => {
    
    
    return(
        <NavContainer>
            <NavWrapper>
                <LeftWrapper>
                    <TittleWrapper>
                        <NameTitle>Ethan T. Craig</NameTitle>
                    </TittleWrapper>
                </LeftWrapper>
                <RightWrapper>
                    
                </RightWrapper>
            </NavWrapper>
        </NavContainer>
    );
}

export default NavBar;