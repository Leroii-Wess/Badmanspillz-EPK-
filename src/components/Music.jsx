import styled from "styled-components";
import sandyBg from "../images/sandy.jpg";

function Music({ id }) {
  return (
    <StyledSection id={id}>
      <GlassDiv>
        <H2>Music</H2>
        <iframe
          title="Badmanspillz music"
          width="80%"
          height="600"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1509310795&amp;color=a06cd5"
        ></iframe>
      </GlassDiv>
    </StyledSection>
  );
}

export default Music;

const StyledSection = styled.div`
  height: 100vh;
  background-image: url(${sandyBg});
  background: cover;
`;

const GlassDiv = styled.div`
  height: 100vh;
  width: 150rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.148);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const H2 = styled.h2`
  font-family: inherit;
  font-size: 3rem;
  text-transform: uppercase;
`;
