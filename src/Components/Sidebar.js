import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsDta} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from './firebase'


function Sidebar(props) {


    const addChannel = () =>{
        const propmtName = prompt("Enter channel name");
        console.log(propmtName);
        if(propmtName){
            db.collection('rooms').add({
                name : propmtName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Arokyaillam
                </Name>
                <NewMassage>
                    <AddCircleOutlineIcon />
                </NewMassage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsDta.map(item => (
                        <MainChannelsItems>
                            {item.icon}
                            {item.text}
                        </MainChannelsItems>
                    ))
                }
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick = {addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item =>(
                            <Channel>
                                # {item.name}
                            </Channel>  
                        ))
                    }
                </ChannelsList>
            </ChannelContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background : #3F0E40;
`
const WorkspaceContainer = styled.div`
    color : white;
    height : 64px;
    display : flex;
    align-items : center;
    padding-left : 19px;
    justify-content : space-between;
    border-bottom : 1px solid #532753;
`
const Name = styled.div`

`
const NewMassage = styled.div`
    width : 36px;
    height : 36px;
    background : white;
    color : #3F0E40;
    fill : #3F0E40;
    display :flex;
    justify-content : center;
    align-items : center;
    border-radius : 50%;
    margin-right : 20px;
    cursor : pointer;
`

const MainChannels = styled.div`

`
const MainChannelsItems = styled.div`
    color : rgb(188,172,188);
    display : grid;
    grid-template-columns : 15% auto;
    height : 28px;
    align-items : center;
    padding-left : 19px;
    cursor : pointer;
    :hover {
        background : #350D36;
    }
    `
const ChannelContainer = styled.div`
    color : rgb(188,172,188);
    margin-top : 10px;
`
const NewChannelContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 28px;
    padding : 0 12px 0 19px;
`

const ChannelsList = styled.div`
    
`
const Channel = styled.div`
    height : 28px;
    display : flex;
    align-items : center;
    padding-left: 19px;
    cursor : pointer;
    :hover {
        background : #350D36;
    }
`