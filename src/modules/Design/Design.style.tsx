import styled from "styled-components";

const Styles = styled.section`
  height: 100%;
  .grid_area {
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    height: 100%;
    padding-bottom: 16px;
    .primary_card {
      height: 100%;
      padding: 16px;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
      background-color: #fff;
      border-radius: 8px;
    }
    .dropping_area {
      width: 75%;
      &--container {
        background-color: #e5e5e5;
        overflow-y: scroll;
      }
    }
    .dropping_sidebar {
      width: 25%;
      .primary_card {
        max-height: 85vh;
        min-height: 85vh;
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }
  }

  .craftjs-renderer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-height: 80vh;
  }
`;

export default Styles;
