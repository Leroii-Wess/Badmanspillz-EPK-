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
  /* height: 100vh; */
  height: auto;
  background-color: #000;
`;

const Container = styled.div`
  max-width: 115rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;
`;

const H2 = styled.h2`
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const BioBox = styled.div`
  height: 40rem;
  padding: 3rem;
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const TextBox = styled.div`
  width: 50%;
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
`;

const Gallery = styled.div`
  height: 70rem;
  width: 100%;
  padding: 2rem;
`;
