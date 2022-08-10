import styled from "react-router-dom";

import "./App.css";

import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

const Container = styled.div`

`

function App() {
  return (
    <Container>
      <Menu/>
    </Container>
  )
}

export default App;