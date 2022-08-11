import React from "react";
import styled from "styled-components";

import YoutubeLogo from "../assets/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";


const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: #FFF;
`

const Wrapper = styled.div`
    padding: 10px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

function Menu() {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={YoutubeLogo}/>
                    YoutubeLogo
            </Logo>
            <Item>
                <HomeIcon/>
                Início
            </Item>
            <Item>
                <ExploreOutlinedIcon/>
                Explorar
            </Item>
            <Item>
                <AppShortcutOutlinedIcon/>
                Shorts
            </Item>
            <Item>
                <SubscriptionsOutlinedIcon/>
                Inscrições
            </Item>
            <Item>
                <LibraryMusicOutlinedIcon/>
                Biblioteca
            </Item>
            <Item>
                <HistoryOutlinedIcon/>
                Histórico
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu;