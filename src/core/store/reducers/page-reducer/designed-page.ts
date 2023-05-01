import generateDefaultElement from "@/core/helpers/generate-default-element";
import reorderElements from "@/core/helpers/reorder-elements";
import uuid from "@/core/helpers/unique-Id-genrator";
import { DesignedPageState } from "@/core/interfaces/DesignedPageState";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DesignedPageState = {
  items: [],
  activeElement: null,
  activeElementIndex: null,
  activeElementResize: null,
};

export const designedPageSlice = createSlice({
  name: "designedPage",
  initialState,
  reducers: {
    setElemnts: (state, action) => {
      localStorage.setItem("page_elements", JSON.stringify(action.payload));
      return { ...state, items: action.payload };
    },
    setActiveElemnts: (state, action) => {
      return { ...state, activeElement: action.payload };
    },
    setActiveElemntResizing: (state, action) => {
      return { ...state, activeElementResize: action.payload };
    },
    createNewElemnt: (state, action) => {
      console.log(action);

      const { draggableId, source, destination, type } = action.payload;
      if (destination.droppableId !== "create") {
        if (["TEXT", "BUTTON", "INPUT", "LINE", "GRID", "NAVBAR", "PARAGRAPH", "BANNER", "FOOTER"].includes(draggableId)) {
          localStorage.setItem("page_elements", JSON.stringify([...state.items, generateDefaultElement(draggableId)]));
          return { ...state, items: [...state.items, generateDefaultElement(draggableId)] };
        }

        localStorage.setItem("page_elements", JSON.stringify(state.items));
        return {
          ...state,
          items: reorderElements({
            elements: state.items,
            distIndex: destination.index,
            sourceIndex: source.index,
            distDroppableId: destination.droppableId || null,
            sourceDroppableId: source.droppableId || null,
          }),
        };
      }
    },
  },
  extraReducers: {},
});
export const { setElemnts, createNewElemnt, setActiveElemnts, setActiveElemntResizing } = designedPageSlice.actions;
export default designedPageSlice.reducer;
