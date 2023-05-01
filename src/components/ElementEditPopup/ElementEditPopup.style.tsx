import styled from "styled-components";

const Container = styled.section`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000097;
  top: 0;
  left: 0;
  .popup {
    width: 25%;
    height: fit-content;
    background-color: #fff;
    border: 1px solid #9a9a9a;
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
