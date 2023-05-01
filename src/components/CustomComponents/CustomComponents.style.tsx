import styled from "styled-components";

const Container = styled.section`
  margin-top: 10px;
  .menu_head {
    border-radius: 6px;
    width: 100%;
    background-color: #0086ff50;
    display: flex;
    justify-content: space-between;
    &--title {
      .icon {
        color: #0086ff;
        margin-right: 8px;
      }
    }
  }

  .menu_body {
    .tool_list {
      display: grid;
      grid-template-columns: auto;
      gap: 10px;
      margin-top: 10px;
      transition: all 0.4s ease-in-out;
      &--item {
        background-color: #fff;
        border: 1px solid #989898;
        width: 100%;
        min-height: 80px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.1s ease-in-out;

        cursor: grab;
        &.active,
        &:hover {
          border: 1px solid #fff;
          background-color: #0086ff30;
        }
        &__name {
          margin-top: 4px;
        }
      }
    }
  }
`;

export default Container;
