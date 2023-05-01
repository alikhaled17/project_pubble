import styled from "styled-components";

const Container = styled.section`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.802);
  display: flex;
  justify-content: center;
  align-items: center;

  &#app-loader {
    display: none;
  }

  @keyframes loading {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  .loader-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 15%;
    .Path_1 {
      animation: loading 1s infinite ease-in-out;
    }
    .Path_2 {
      animation: loading 0.9s infinite ease-in-out;
    }
    .Path_3 {
      animation: loading 0.8s infinite ease-in-out;
    }
  }
`;

export default Container;
