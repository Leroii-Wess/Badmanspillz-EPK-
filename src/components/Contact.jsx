import styled from "styled-components";
import FloatingSocials from "./FloatingSocials";

function Contact({ id }) {
  return (
    <StyledSection id={id}>
      <Card>
        <h3>Contact</h3>
        <FloatingSocials />
      </Card>
    </StyledSection>
  );
}

export default Contact;

const StyledSection = styled.div`
  height: 100vh;
  background-color: #000;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  height: 50rem;
  width: 80rem;
  background-color: var(--color-primary);
  background-image: linear-gradient(45deg, #301934, #111);
  position: relative;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
`;
