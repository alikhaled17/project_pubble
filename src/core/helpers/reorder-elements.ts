import { ItemState } from "../interfaces/DesignedPageState";

const reorderElements = ({ elements, distIndex, sourceIndex, sourceDroppableId, distDroppableId }) => {
  const newSourceElements: ItemState = elements[sourceIndex];
  const newDestinationElements: ItemState = sourceDroppableId === distDroppableId ? elements[distIndex] : newSourceElements;

  const newElements: ItemState[] = [];

  for (let i = 0; i < elements.length; i++) {
    if (i === sourceIndex) {
      newElements.push(newDestinationElements);
    } else if (i === distIndex) {
      newElements.push(newSourceElements);
    } else {
      newElements.push(elements[i]);
    }
  }

  return newElements;
};

export default reorderElements;
