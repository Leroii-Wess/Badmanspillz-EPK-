import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function HeaderNav() {
  return (
    <StyledHeader>
      <Logo />

      <NavLinks />
    </StyledHeader>
  );
}

export default HeaderNav;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-image: url("./images/richard-ortega-7MEeVUjl7sA-unsplash.jpg");
  background-size: cover;
  padding: 0 7rem;

  @media (max-width: 64em) {
    padding: 0 5rem;
  }
  @media (max-width: 37em) {
    padding: 0 1rem;
  }
`;
