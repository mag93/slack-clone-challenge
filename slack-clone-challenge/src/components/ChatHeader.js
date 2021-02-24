import styled from "styled-components";
import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

function ChatHeader() {
    return (
        <Container>
        <ChatHeaderContainer>
            <ChatHeaderInfo>
                <h5># Muzzammil's Slack Clone for the 5 day ReactJs Challenge by Clever Programmer 🌟 </h5>
                <p>So... am I going to win any prize?! (hover over details on the right)</p>
            </ChatHeaderInfo>
            <ChatHeaderDetails>
                <h5>Details</h5>
                <InfoIcon/>
            </ChatHeaderDetails>
            
        </ChatHeaderContainer>
        <Border/>

        </Container>
    )
}

export default ChatHeader

const ChatHeaderContainer =styled.div`
    color: #fdfcef;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
   // border-bottom: 1px solid #fdfcef;


`

const Border = styled.div`
    width: 95%;
    border-bottom: 1px solid #fdfcef;
    margin-left: 2.5%;
`

const ChatHeaderInfo =styled.div`
    margin-left: 1%;

    p {
        font-size: 14px;
    }

`

const ChatHeaderDetails =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.5%;
    margin-top: 15px;
    border-radius: 15px;
    cursor: pointer;
    padding: 5px;

    > h5 {
        margin-right: 5px;
    }

    :hover {
        background: #fdfcef;
        color: #242323;
    }
`

const Container =styled.div`
    height: 64px;
    margin-top: 2px;
    `



