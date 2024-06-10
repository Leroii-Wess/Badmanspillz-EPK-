import styled from "styled-components";
import { BsEnvelopeAt } from "react-icons/bs";
import FloatingSocials from "./FloatingSocials";

function Contact({ id }) {
  return (
    <StyledSection id={id}>
      <Container>
        <H2>Contact</H2>
        <Card>
          <BsEnvelopeAt />
          <Mail href="mailto:bookspillz@gmail.com">
            <Text>bookspillz@gmail.com</Text>
          </Mail>

          <FloatingSocials />
        </Card>
        <Copyright>
          &copy; {new Date().getFullYear()} Copyright BMS Inc.
        </Copyright>
      </Container>
    </StyledSection>
  );
}

export default Contact;

const StyledSection = styled.div`
  height: auto;
  max-width: 100vw;
  background-color: #000;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const H2 = styled.h2`
  margin-bottom: 8rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 0rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Mail = styled.a`
  text-decoration: none;
  color: #fff;
  gap: 2rem;

  font-size: 3rem;
  &:hover {
    color: var(--color-primary);
  }

  @media (max-width: 64em) {
    font-size: 2rem;
  }
  @media (max-width: 54em) {
    font-size: 1.8rem;
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-left: 2rem;

  @media (max-width: 54em) {
    margin-left: 1rem;
  }
  @media (max-width: 37em) {
    font-size: 1.4rem;
  }
  @media (max-width: 28em) {
    font-size: 1.5rem;
  }
`;

const Card = styled.div`
  height: 40rem;
  width: 80%;
  background-color: var(--color-primary);
  background-image: linear-gradient(45deg, #301934, #111);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;

  margin-bottom: 10rem;

  @media (max-width: 64em) {
    font-size: 2rem;
    height: 30rem;
  }
  @media (max-width: 54em) {
    font-size: 1.8rem;
    height: 25rem;
  }
  @media (max-width: 37em) {
    font-size: 1.5rem;
    height: 18rem;
  }
  @media (max-width: 28em) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: #cdcdcd;
  @media (max-width: 54em) {
    font-size: 1rem;
  }
`;
