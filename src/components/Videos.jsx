import styled from "styled-components";
import bg from "../images/richard-ortega.jpg";

function Videos({ id }) {
  return (
    <StyledSection id={id}>
      <H2>Videos</H2>

      <Container>
        <VideoDiv>
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/_7paQwiqjQ0?si=I-2uWpod5p3y71nX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Title>Badmanspillz - TKG (Official Music Video)</Title>
        </VideoDiv>
        <VideoDiv>
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/qlmogqGmsak?si=hIxv8MSpL5ZJ5Kt5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Title>Badmanspillz - What Have You Done To Me? (Visualizer)</Title>
        </VideoDiv>
        <VideoDiv>
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/UMZiVbQ1wBw?si=LlDzOpBuP-gVZHlj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Title>Badmanspillz - You || Fatal Attraction (Visualizer)</Title>
        </VideoDiv>
      </Container>
    </StyledSection>
  );
}

export default Videos;

const StyledSection = styled.div`
  height: auto;
  max-width: 100vw;
  padding: 4rem 3rem;

  background-image: url(${bg});
  background-size: contain;
  background-position: center;
  background: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (max-width: 54em) {
    gap: 1rem;
  }
`;

const H2 = styled.h2`
  font-family: inherit;
  font-size: 3rem;
  text-transform: uppercase;

  @media (max-width: 54em) {
    font-size: 2rem;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;

  @media (max-width: 54em) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (max-width: 64em) {
    padding: 2rem;
  }
  @media (max-width: 54em) {
    gap: 2rem;
  }
`;

const VideoDiv = styled.div`
  width: 900px;
  height: 506.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 64em) {
    padding: 2rem 10rem;
  }
  @media (max-width: 54em) {
    padding: 2rem 18rem;
  }
  @media (max-width: 37em) {
    width: 800px;
    height: 450px;
  }
  @media (max-width: 28em) {
    padding: 2rem 18rem;
    width: 750px;
    height: 421.88px;
  }
`;
