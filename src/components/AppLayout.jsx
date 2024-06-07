import styled from "styled-components";
// import HeaderNav from "./HeaderNav";
import Music from "./Music";
import Videos from "./Videos";
import Bio from "./Bio";
import Contact from "./Contact";
import Hero from "./Hero";

function AppLayout() {
  return (
    <Main>
      <Hero />

      <Music id="music" />
      <Videos id="videos" />
      <Bio id="bio" />
      <Contact id="contact" />
    </Main>
  );
}

export default AppLayout;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 150rem;
  margin: 0 auto;
`;
