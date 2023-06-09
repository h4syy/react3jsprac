import styled from "styled-components"
import { About } from "./components/About"
import { Contact}  from "./components/Contact"
import { Hero } from "./components/Hero"
import { Works } from "./components/Works"

const Container = styled.div`
  height:100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
  background: url("./img/background.png") no-repeat center center/cover;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
