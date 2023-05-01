export type ElementType = "TEXT" | "BUTTON" | "INPUT" | "LINE" | "GRID" | "NAVBAR" | "PARAGRAPH" | "BANNER" | "FOOTER" | "";
export type ItemState = {
  id: string;
  name: string;
  elementType: ElementType;
  childrens?: ItemState[];
};

export type DesignedPageState = {
  items: ItemState[];
  activeElement: any | null;
  activeElementIndex: number | null;
  activeElementResize: string | null;
};
