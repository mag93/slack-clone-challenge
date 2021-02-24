import React from 'react'
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {ChannelsData, SidebarItemsData} from "../data/SidebarData";
import AddIcon from '@material-ui/icons/Add';
import TypeWriter from "react-typewriter";

function Sidebar() {
    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    <TypeWriter typing={0.7} minDelay={100}>Muzzammil's Slack 🚀</TypeWriter>
                    <h3></h3>
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <Border/>

            <MainChannels>
                {
                    SidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>

            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon/>
                   
                </NewChannelContainer>
                <ChannelsList>
                    {
                        ChannelsData.map(channel => (
                            <Channel>
                                {channel.icon}
                                {channel.text}
                            </Channel>
                        ))
                    }
                </ChannelsList>

            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #222121;
`
const WorkSpaceContainer = styled.div`
    color: #fdfcef;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    //border-bottom: 1px solid #fdfcef;
`

const Border = styled.div`
    width: 90%;
    border-bottom: 1px solid #fdfcef;
    margin-left: 5%;
`

const Name = styled.div`
    h3 {
        font-weight: 500;
    }
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #fdfcef;
    color: #1e1c1c;
    fill:#1e1c1c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

`
const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: #fdfcef;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    padding-left: 19px;
    align-items: center;
    cursor: pointer;
    :hover {
        background:#fdfcef;
        color: #222121;
        font-weight: 600;
    }
`
const ChannelsContainer = styled.div`
    color: #fdfcef;
    margin-top: 10px;

`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 19px;
    height: 28px;
    padding-right: 12px;

`

const ChannelsList = styled.div`
    margin-top: 7px;
`

const Channel = styled.div`
    color: #fdfcef;
    height: 28px;
    display: grid;
    grid-template-columns: 15% auto;
   // justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-left: 19px;

    :hover {
        background:#fdfcef;
        color: #222121; 
        font-weight: 600;
           }
`
