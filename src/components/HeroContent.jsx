import styled from "styled-components";
import heroImage from "../images/badmanspillz-hero-background.png";
import { useNavigation } from "../Context/NavigationContext";
import { FaLongArrowAltDown } from "react-icons/fa";

function HeroContent() {
  const { scrollToSection } = useNavigation();

  return (
    <StyledDiv>
      <Image src={heroImage} alt="Badmanspillz" />

      <ContentDiv>
        <H1>
          I am <br />
          <Span>BadManSpillz!</Span>
        </H1>

        <StyledP>
          Fondly abbreviated BMS is a Nigerian singer and songwriter, well known
          for his range and lyricism. BMS stands for Beautiful Music Strictly
          and that's all I'm about. Welcome to the Beautiful world!
        </StyledP>
        <StyledButton onClick={() => scrollToSection("music")}>
          Listen Now{" "}
          <span>
            <FaLongArrowAltDown />
          </span>
        </StyledButton>
      </ContentDiv>
    </StyledDiv>
  );
}

export default HeroContent;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20rem;
  max-width: 80%;
  margin: 10rem auto;

  @media (max-width: 86em) {
    max-width: 70%;
    margin: 10rem auto;
    gap: 13rem;
  }
  @media (max-width: 76em) {
    max-width: 68%;
    margin: 10rem auto;
    gap: 13rem;
  }
  @media (max-width: 64em) {
    max-width: 72%;
    margin: 10rem auto;
    gap: 13rem;
  }
  @media (max-width: 54em) {
    max-width: 68%;
    margin: 8rem auto;
    gap: 9rem;
  }
  @media (max-width: 47em) {
    max-width: 77%;
    margin: 7rem auto;
    gap: 8rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 37em) {
    gap: 5rem;
  }
`;

const Image = styled.img`
  height: 45rem;

  @media (max-width: 86em) {
    height: 40rem;
  }
  @media (max-width: 76em) {
    height: 30rem;
  }
  @media (max-width: 64em) {
    height: 28rem;
  }
  @media (max-width: 54em) {
    height: 26rem;
  }
  @media (max-width: 47em) {
    width: auto;
  }
  @media (max-width: 37em) {
    width: 50%;
  }
  @media (max-width: 28em) {
    height: 70%;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 37em) {
    width: 28rem;
    align-items: center;
  }
`;

const H1 = styled.h1`
  line-height: 1;
  margin-bottom: 2rem;
  font-size: 4rem;
  @media (max-width: 76em) {
    font-size: 3rem;
  }
  @media (max-width: 54em) {
    font-size: 2.5rem;
  }
  @media (max-width: 37em) {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Span = styled.span`
  color: var(--color-primary);
  font-size: 5rem;
  @media (max-width: 76em) {
    font-size: 3.5rem;
  }
  @media (max-width: 54em) {
    font-size: 3rem;
  }
`;

const StyledP = styled.p`
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 76em) {
    font-size: 1.5rem;
  }
  @media (max-width: 64em) {
    font-size: 1.2rem;
  }
  @media (max-width: 54em) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  display: flex;

  justify-content: center;
  gap: 0.2rem;
  width: 12rem;
  font-size: 1.5rem;
  font-weight: bold;
  /* color: #fff; */
  padding: 0.8rem 0.8rem;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  z-index: 5;
  transition: all 0.8s;
  background-image: linear-gradient(to right bottom, #fbc2eb 0%, #a6c1ee 80%);

  &:hover {
    /* transition: all 0.5s ease-in; */
    background-image: linear-gradient(to right top, #a6c1ee 0%, #fbc2eb 70%);
    background-position: left right;
    letter-spacing: 0.5px;
    width: 12.5rem;
  }

  @media (max-width: 54em) {
    font-size: 1.2rem;
    width: 9rem;
    padding: 0.7rem 0.6rem;
  }
  @media (max-width: 47em) {
    font-size: 1.1rem;
    width: 9rem;
    padding: 0.6rem 0.6rem;
    align-items: center;
  }
`;
