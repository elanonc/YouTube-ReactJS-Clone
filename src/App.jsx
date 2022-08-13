import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Video from "./pages/Video";

import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: #181818;
`

const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Menu/>
        <Main>
          <Navbar/>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="video">
                  <Route path=":id" element={<Video/>} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  )
}

export default App;