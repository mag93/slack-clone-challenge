import React from 'react'
import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';
import {FormatIconsLeft} from "../data/FormatIcons";
import {FormatIconsRight} from "../data/FormatIcons";


function ChatInput() {
    return (
        <Container>
            <InputContainer>
            <form>
                <input type="text" placeholder="Message"/>
                <SendButton>
                    <SendIcon/>
                </SendButton>
            </form>
            <IconsFormattingContainer>
                    {
                        FormatIconsLeft.map((item) =>{
                            return(<LeftFormat>
                            
                                {item.icon}
                             </LeftFormat>)
                         

                        })
                    }

                {
                        FormatIconsRight.map((item) =>{
                            return(
                            <RightFormat>
                            
                                {item.icon}
                            </RightFormat>

                             )
                         

                        })
                    }

            </IconsFormattingContainer>
            </InputContainer>
            
            
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 24px;
`

const LeftFormat = styled.div`
     color: #fdfcef;
    display: flex;
    height: 24px;
    align-items: center;
    cursor: pointer;
    font-size: 10px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    border-radius: 4px;

    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background: #fdfcef;
        color: #242323;
    }
`
const RightFormat = styled.div`
   color: #fdfcef;
    display: flex;
    height: 24px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 10px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 4px;

    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background: #fdfcef;
        color: #242323;
    }
`


const IconsFormattingContainer =styled.div`
    background: #1c1c1c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 10px;
`

const InputContainer = styled.div`
    border: 1px solid #fdfcef;
    border-radius: 4px;
    

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
            color: #fdfcef;
            background: transparent;
            font-weight: 600;
        }

        input:focus{
            outline: none;
        }
    }
`
const SendButton = styled.div`
    color: #fdfcef;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root{
        width: 18px;
    }

    :hover{
        background: #fdfcef;
        color: #242323;
    }
`