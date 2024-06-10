import styled from "styled-components";
import "../index.css";
import { useState } from "react";
import { useNavigation } from "../Context/NavigationContext";
import { IoMenu, IoClose } from "react-icons/io5";

function NavLinks() {
  const { scrollToSection } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((open) => !open);
  }

  return (
    <>
      <Menu onClick={handleClick}>{menuOpen ? <IoClose /> : <IoMenu />}</Menu>
      <StyledNav open={menuOpen}>
        <StyledLinks onClick={() => scrollToSection("music")}>
          Music
        </StyledLinks>

        <StyledLinks onClick={() => scrollToSection("videos")}>
          Videos
        </StyledLinks>

        <StyledLinks onClick={() => scrollToSection("bio")}>Bio</StyledLinks>

        <StyledLinks onClick={() => scrollToSection("contact")}>
          Contact
        </StyledLinks>
      </StyledNav>
    </>
  );
}

export default NavLinks;

const StyledNav = styled.ul`
  display: flex;
  column-gap: 2rem;

  @media (max-width: 47em) {
    /* display: none; */
    flex-direction: column;
    width: 80%;
    background-color: #000;

    z-index: 2;
    position: absolute;
    top: 10%;

    display: ${(props) => (props.open ? "flex" : "none")};
  }
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
  font-size: 1.8rem;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
    letter-spacing: 0.3px;
    color: var(--color-primary);
  }

  @media (max-width: 64em) {
    font-size: 1.5rem;
  }
  @media (max-width: 54em) {
    font-size: 1.2rem;
  }
  @media (max-width: 47em) {
    width: 100%;
    justify-content: center;
    margin: 0.1rem 0.5rem;
  }
`;

const Menu = styled.div`
  font-size: 4rem;
  display: none;
  position: absolute;
  top: 1%;
  right: 5%;
  z-index: 10;
  @media (max-width: 47em) {
    display: flex;
  }
`;
