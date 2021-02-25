import React from 'react'
import styled from "styled-components"

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/31.jpg"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Muzzammil
                    <span>date here</span>
                </Name>
                <Text>
                    Yeeeaahhh
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    color: #fdfcef;
`

const UserAvatar = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span{
        font-weight: 400;
        margin-left: 8px;
        font-size: 13px;
    }
`

const Text = styled.div``
