import styled from "styled-components";
import spotify from "../images/icons/spotify-logo.png";
import apple from "../images/icons/apple-logo.png";
import youtube from "../images/icons/youtube-logo.png";
import soundcloud from "../images/icons/soundcloud-logo.png";

function FloatingIcons() {
  return (
    <Box>
      <ImageSpan>
        <a
          href="https://music.apple.com/us/artist/badmanspillz/1565353322"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={apple} alt="logo" />
        </a>
      </ImageSpan>
      <ImageSpan>
        <a
          href="https://open.spotify.com/artist/790OrVPJdHBDpwbkmq3DqG?si=XrI7WDTIRTeAMYdwveoGgQ"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={spotify} alt="logo" />
        </a>
      </ImageSpan>
      <ImageSpan>
        <a
          href="https://www.youtube.com/@BadManSpillz"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={youtube} alt="logo" />
        </a>
      </ImageSpan>
      <ImageSpan>
        <a
          href="https://soundcloud.com/ahm_spillz"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={soundcloud} alt="logo" />
        </a>
      </ImageSpan>
    </Box>
  );
}

export default FloatingIcons;

const Box = styled.div`
  width: 4rem;
  height: 20rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  right: 3rem;
  top: 35%;

  &:after {
    content: "";
    position: absolute;
    border-right: 1.5px solid #6c757d;
    height: 3rem;
    width: 5px;
    top: 20.5rem;
    right: 2rem;
  }
`;

const ImageSpan = styled.span`
  &:before {
    content: "";
    position: absolute;
    border-right: 1.5px solid #6c757d;
    height: 3rem;
    width: 5px;
    top: 4.5rem;
    right: 2rem;
  }
  &:after {
    content: "";
    position: absolute;
    border-right: 1.5px solid #6c757d;
    height: 3rem;
    width: 5px;
    top: 12.5rem;
    right: 2rem;
  }
`;

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  border: 2px solid #6c757d;
  padding: 5px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  filter: grayscale(1);
  cursor: pointer;
  position: relative;
  z-index: 5;
`;
