import React from 'react'
import styled from "styled-components";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
    return (
        <Container>
            
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search.."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>
                <Name>
                    Muzzammil
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt=""/>
                </UserImage>

            </UserContainer>

        </Container>
        
    )
}

export default Header

const Container = styled.div`
        background: #1e1c1c;
        color: #fdfcef;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 1px 0 0 #222121;
        height: 50px;
        z-index: 101;
`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;

`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`  
    width: 100%;
    box-shadow: inset 0 0 0 1px #1e1c1c;
    display: flex;
    align-items: center;

    input {
            background-color: #242323;
            border: none;
            padding-left: 8px;
            padding-right: 8px;
            color: #fdfcef;
            padding-top: 4px;
            padding-bottom: 4px;
            width: 100%;
          border-radius: 10px;

    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2.5%;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid #fdfcef;
    border-radius: 3px;

    img {
        width: 100%;
    }
`




