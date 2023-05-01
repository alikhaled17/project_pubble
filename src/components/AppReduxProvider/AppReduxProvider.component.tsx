import React from "react";
import { Provider } from "react-redux";
import { store } from "@/core/store/store";

type Props = {
  children: React.ReactNode;
};

function AppReduxProvider({ children }: Props): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

export default AppReduxProvider;
