import styled from "styled-components";
import profileImage from "../images/bms-profile.jpg";
import Carousel from "./Carousel";

function Bio({ id }) {
  return (
    <StyledSection id={id}>
      <Container>
        <H2>Bio</H2>
        <BioBox>
          <TextBox>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            non aspernatur vitae dicta commodi labore saepe minus possimus
            impedit porro amet sunt quos quae, ratione incidunt provident a
            accusamus exercitationem! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Itaque, nobis sequi ullam asperiores distinctio
            quo quam fuga doloribus, amet temporibus
          </TextBox>
          <ImageBox>
            <Image src={profileImage} alt="Badmanspillz" />
          </ImageBox>
        </BioBox>
        <Gallery>
          <Carousel />
        </Gallery>
      </Container>
    </StyledSection>
  );
}

export default Bio;

const StyledSection = styled.div`
  height: auto;
  max-width: 100vw;
  background-color: #000;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  @media (max-width: 37em) {
    padding: 1rem;
  }
  @media (max-width: 28em) {
    gap: 1rem;
  }
`;

const H2 = styled.h2`
  margin-bottom: 5rem;
  text-transform: uppercase;

  @media (max-width: 64em) {
    margin-bottom: 2rem;
  }
  @media (max-width: 54em) {
    font-size: 2rem;
  }
`;

const BioBox = styled.div`
  height: 40rem;
  max-width: 100%;
  padding: 3rem;
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 64em) {
    padding: 2rem;
    margin-bottom: 12rem;
  }
  @media (max-width: 54em) {
    margin-bottom: 2rem;
    gap: 2rem;
  }
  @media (max-width: 28em) {
    padding: 0;
  }
`;

const TextBox = styled.div`
  width: 60%;
  font-size: 1.8rem;
  line-height: 1.6;

  @media (max-width: 64em) {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  @media (max-width: 54em) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  @media (max-width: 28em) {
    width: 50%;
    font-size: 1.1rem;
  }
`;
const ImageBox = styled.div`
  width: 40%;
  @media (max-width: 28em) {
    width: 50%;
    height: 80%;
  }
`;

const Image = styled.img`
  height: 100%;
  @media (max-width: 54em) {
    height: 90%;
  }
  @media (max-width: 28em) {
    height: 75%;
  }
`;

const Gallery = styled.div`
  height: 40rem;
  max-width: 100%;
  padding: 2rem;

  @media (max-width: 28em) {
    padding: 0;
  }
`;
