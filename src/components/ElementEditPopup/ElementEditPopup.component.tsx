import React, { cloneElement, useState } from "react";
import { Button, TextField } from "@mui/material";
import { ItemState } from "@/core/interfaces/DesignedPageState";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/core/interfaces/AppState";
import { setActiveElemnts, setElemnts } from "@/core/store/reducers/page-reducer/designed-page";
import { AppDispatch } from "@/core/store/store";
import Container from "./ElementEditPopup.style";

type ElementEditPopupProps = {
  element: ItemState;
  index: number;
};

function ElementEditPopup({ element, index }: ElementEditPopupProps): JSX.Element {
  const [elementClone, setElementClone] = useState<ItemState>(element);
  const { items, activeElement, activeElementIndex } = useSelector((state: AppState) => state.DesignedPage);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeData = (val: string) => {
    setElementClone({ ...elementClone, name: val });
  };

  const handleSubmitChanges = () => {
    const newElements: ItemState[] = [];
    for (let i = 0; i < items.length; i++) {
      if (i === index) {
        newElements.push(elementClone);
      } else {
        newElements.push(items[i]);
      }
    }
    dispatch(setElemnts(newElements));
    dispatch(setActiveElemnts({ element: null, index: null }));
  };

  return (
    <Container>
      <div className="popup">
        <h6 className="fw-bold m-0 p-0">Edit {elementClone.elementType.toLocaleLowerCase()} element options</h6>
        <small className="mb-4">you can edit style & value ..etc. </small>
        <TextField
          onChange={(e) => handleChangeData(e.target.value)}
          value={elementClone.name}
          variant="outlined"
          label="Element value"
          className="w-100"
          focused
          multiline
          // rows={3}
        />
        <Button onClick={handleSubmitChanges} style={{ backgroundColor: "#0086FF", color: "#FFF" }} className="mt-4">
          Save changes
        </Button>
      </div>
    </Container>
  );
}

export default ElementEditPopup;
