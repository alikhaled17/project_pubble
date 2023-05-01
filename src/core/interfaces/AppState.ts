import { AppSettings } from "./AppSettings";
import { DesignedPageState } from "./DesignedPageState";

export type AppSettingsState = {
  appSettings: AppSettings;
};

export interface AppState {
  AppSettings: AppSettingsState;
  DesignedPage: DesignedPageState;
}
