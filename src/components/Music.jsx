import styled from "styled-components";
import sandyBg from "../images/sandy.jpg";

function Music({ id }) {
  return (
    <StyledSection id={id}>
      <GlassDiv>
        <H2>Music</H2>
        <Container>
          <iframe
            title="Badmanspillz music"
            width="100%"
            height="465"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1509310795&amp;color=a06cd5"
          ></iframe>
        </Container>
      </GlassDiv>
    </StyledSection>
  );
}

export default Music;

const StyledSection = styled.div`
  height: auto;
  background-image: url(${sandyBg});
  background: cover;
  max-width: 100vw;
`;

const GlassDiv = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem;
  padding-bottom: 8rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.148);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const H2 = styled.h2`
  font-family: inherit;
  font-size: 3rem;
  text-transform: uppercase;

  @media (max-width: 54em) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  width: 80%;
  /* height: 80%; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 37em) {
    width: 100%;
  }
`;
