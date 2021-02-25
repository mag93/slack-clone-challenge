import React from 'react'
import ChatHeader from './ChatHeader'
import styled from "styled-components";
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import Particles from "react-particles-js";
import { GridListTileBar } from '@material-ui/core';

function Chat() {
    return (
        <Outside>
            <Background>
                 <Particles width={"100%"} height={"90vh"} params={{
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        }}/>

            </Background>
                 <Container>
            {/* <Header>
                <Channel>
                    <ChannelName>
                        #clever
                    </ChannelName>
                    <ChannelInfo>
                        company wide info
                    </ChannelInfo>

                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                </ChannelDetails>

            </Header> */}
            <ChatHeader/>

            <MessageContainer>
               

                <Message>
                    <ChatMessage/>
                </Message>

            </MessageContainer>
            <ChatInput/>

        </Container>
        </Outside>
       
    )
}

export default Chat

const Outside = styled.div`
    position: relative;
    width: auto;
`
const Background = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    overflow: none;
`


const Message =styled.div`
    padding-left: 15px;
   
   :hover{
    background: #1e1c1c;
    border-radius: 7px;
   }
`

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px 580px auto;
    position: relative;
    z-index: 100;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fdfcef;
    justify-content: space-between;

    
`

const MessageContainer = styled.div`
    margin-top: 10px;
`


const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #fdfcef;
`

const Channel = styled.div``

const ChannelName = styled.div`
    font-weight: 700;
    color: #fdfcef;
`



const ChannelInfo = styled.div`
    font-weight: 400;
    font-size: 13px;
    margin-top: 8px;
    color: #fdfcef;

`

const Info = styled(InfoIcon)`
    padding-right: 10px;
`

