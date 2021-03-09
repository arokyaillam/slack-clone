import React from 'react'
import styled from 'styled-components'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div>
            <Container>
            <Main>
                <AccessAlarmIcon />
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search" />
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Antony
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
            </Container>
        </div>
    )
}

export default Header


const Container = styled.div`
    background : #350d36;
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    height : 38px;
    position : relative;
    box-shadow : 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display : flex;
    margin : 0 16px 0 16px;
`

const SearchContainer = styled.div`
    min-width : 400px;
    margin : 0 16px 0 16px;

`

const Search = styled.div`
    box-shadow : inset 0 0 0 1px rgb(104 74 104);
    width : 100%;
    border-radius : 6px;

input{
    background-color : transparent;
    border : none;
    padding : 4px 8px 4px 8px;
    color : white;
}

input:focus{
    outline : none;
}

`

const UserContainer = styled.div`
    display : flex;
    align-items : center;
    padding-right : 16px;
    position : absolute;
    right : 0;
`
const Name = styled.div`
    padding-right : 16px;
`

const UserImage = styled.div`
    width : 28px;
    height : 28px;

img{
    width : 100%
}
`