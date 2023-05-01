import styled from "styled-components";

const Container = styled.section`
  padding: 16px 0;
  height: 100vh;
  .primary_card {
    padding: 16px;
    height: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    background-color: #fff;
    border-radius: 8px;
    /* custom style from here*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .site_logo {
      width: 100%;
      img {
        margin: 16px auto;
        width: 70%;
        display: block;
      }
    }

    .control_menue {
      padding: 16px;
      width: 100%;
    }

    .user_card_section {
      border-radius: 6px;
      margin-top: auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      background-color: #0086ff50;
    }
  }
`;

export default Container;
