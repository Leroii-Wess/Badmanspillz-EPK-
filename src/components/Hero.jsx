import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import bg from "../images/richard-ortega.jpg";
import HeroContent from "./HeroContent";
import FloatingIcons from "./FloatingIcons";

function Hero() {
  return (
    <StyledMain>
      <HeaderNav />
      <FloatingIcons />
      <HeroContent />
    </StyledMain>
  );
}

export default Hero;

const StyledMain = styled.div`
  height: auto;
  max-width: 100vw;
  background-image: url(${bg});
  background-size: contain;
  background-position: center;
  background: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
`;
