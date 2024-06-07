import styled from "styled-components";
import { BsEnvelopeAt } from "react-icons/bs";
import FloatingSocials from "./FloatingSocials";
import logo from "../images/bms-logo.png";

function Contact({ id }) {
  return (
    <StyledSection id={id}>
      <H2>Contact</H2>
      <Card>
        <Mail href="mailto:bookspillz@gmail.com">
          <BsEnvelopeAt />
          <p>bookspillz@gmail.com</p>
        </Mail>

        <FloatingSocials />
      </Card>
      <Copyright>
        &copy; {new Date().getFullYear()} Copyright BMS Inc.
      </Copyright>
    </StyledSection>
  );
}

export default Contact;

const StyledSection = styled.div`
  height: 100vh;
  background-color: #000;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin-bottom: 8rem;
`;

const Mail = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const Card = styled.div`
  height: 50rem;
  width: 80rem;
  background-color: var(--color-primary);
  background-image: linear-gradient(45deg, #301934, #111);
  position: relative;
  display: flex;
  justify-content: center;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;

  margin-bottom: 10rem;
`;

const Copyright = styled.p`
  font-size: 1.5rem;
`;
