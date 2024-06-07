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
  gap: 35rem;
  max-width: 115rem;
  margin: 15rem auto;
`;

const Image = styled.img`
  height: 50rem;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  line-height: 1;
  margin-bottom: 2rem;
  font-size: 4rem;
`;

const StyledP = styled.p`
  line-height: 1.7;
  margin-bottom: 2rem;
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
`;

const Span = styled.span`
  color: var(--color-primary);
  font-size: 5rem;
`;

// const ArrowSpan = styled.span`

// `
