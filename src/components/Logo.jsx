import styled from "styled-components";
import logo from "../images/bms-logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <StyledImg src={logo} alt="Badmanspillz logo" />
    </Link>
  );
}

export default Logo;

const StyledImg = styled.img`
  height: 7rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }
`;
