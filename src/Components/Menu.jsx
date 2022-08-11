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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LiveTvOutlinedIcon  from '@mui/icons-material/LiveTvOutlined';
import SportsEsportsOutlinedIcon  from '@mui/icons-material/SportsEsportsOutlined';
import SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import TextsmsOutlinedIcon  from '@mui/icons-material/TextsmsOutlined';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: #FFF;
`;

const Wrapper = styled.div`
    padding: 10px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0;
`;

const Hr = styled.hr`
    margin: 15px 0 ;
    border: 0.5px solid #373737;
`;


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
            <Hr/>
            <Item>
                <VideoLibraryOutlinedIcon/>
                Biblioteca
            </Item>
            <Item>
                <HistoryOutlinedIcon/>
                Histórico
            </Item>
            <Item>
                <AccessTimeOutlinedIcon/>
                Assistir mais tarde
            </Item>
            <Hr/>
            <Item>
                <MovieOutlinedIcon/>
                Filmes
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon/>
                Jogos
            </Item>
            <Item>
                <LiveTvOutlinedIcon/>
                Ao vivo
            </Item>
            <Item>
                <LightbulbOutlinedIcon/>
                Aprender
            </Item>
            <Item>
                <EmojiEventsIcon/>
                Esportes
            </Item>
            <Hr/>
            <Item>
                <SettingsOutlinedIcon/>
                Configurações
            </Item>
            <Item>
                <TextsmsOutlinedIcon/>
                Enviar feedback
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu;