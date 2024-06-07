import styled from "styled-components";
import { useNavigation } from "../Context/NavigationContext";

function NavLinks() {
  const { scrollToSection } = useNavigation();

  return (
    <StyledNav>
      <StyledLinks onClick={() => scrollToSection("music")}>Music</StyledLinks>

      <StyledLinks onClick={() => scrollToSection("videos")}>
        Videos
      </StyledLinks>

      <StyledLinks onClick={() => scrollToSection("bio")}>Bio</StyledLinks>

      <StyledLinks onClick={() => scrollToSection("contact")}>
        Contact
      </StyledLinks>
    </StyledNav>
  );
}

export default NavLinks;

const StyledNav = styled.ul`
  display: flex;
  column-gap: 2rem;
`;

const StyledLinks = styled.li`
  text-decoration: none;
  color: #fff;
  display: flex;
  column-gap: 20px;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
    letter-spacing: 0.3px;
    color: var(--color-primary);
  }
`;
