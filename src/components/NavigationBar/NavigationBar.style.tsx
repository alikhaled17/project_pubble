import styled from "styled-components";

const Container = styled.section`
  padding: 16px 0;
  .primary_card {
    padding: 16px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    background-color: #fff;
    border-radius: 8px;
    .navigation_list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      &--item {
        min-width: 100px;
        text-align: center;
        padding: 4px;
      }
    }
  }
`;

export default Container;
