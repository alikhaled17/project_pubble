import { ElementType, ItemState } from "../interfaces/DesignedPageState";
import uuid from "./unique-Id-genrator";

const generateDefaultElement = (elementType: ElementType): ItemState => {
  switch (elementType) {
    case "TEXT":
      return { id: uuid(), name: `Text`, elementType: "TEXT", childrens: [] };
      break;
    case "BUTTON":
      return { id: uuid(), name: `Button`, elementType: "BUTTON", childrens: [] };
      break;
    case "INPUT":
      return { id: uuid(), name: `Input`, elementType: "INPUT", childrens: [] };
      break;
    case "LINE":
      return { id: uuid(), name: `line`, elementType: "LINE", childrens: [] };
      break;
    case "NAVBAR":
      return { id: uuid(), name: `name`, elementType: "NAVBAR", childrens: [] };
      break;
    case "FOOTER":
      return { id: uuid(), name: `footer`, elementType: "FOOTER", childrens: [] };
      break;
    case "PARAGRAPH":
      return {
        id: uuid(),
        name: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat sequi sed harum impedit dolorum hic debitis ut. Possimus, repudiandae blanditiis ab nemo rem molestias tempore deleniti, quasi numquam natus sapiente!`,
        elementType: "PARAGRAPH",
        childrens: [],
      };
      break;
    case "GRID":
      return {
        id: uuid(),
        name: `grid`,
        elementType: "GRID",
        childrens: [
          { id: uuid(), name: `grid`, elementType: "BUTTON", childrens: [] },
          { id: uuid(), name: `grid`, elementType: "BUTTON", childrens: [] },
          { id: uuid(), name: `grid`, elementType: "BUTTON", childrens: [] },
        ],
      };
      break;
    default:
      return { id: "", name: "", elementType: "", childrens: [] };
      break;
  }
};

export default generateDefaultElement;
