import { LaunchState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getLaunchDetailState = createFeatureSelector<LaunchState>(
  "launchDetail"
);

export const getLaunchDetail = createSelector(
  getLaunchDetailState,
  (state: any) => {
    return state.data;
  }
);

export const getLaunchDetailLoaded = createSelector(
  getLaunchDetailState,
  (state: any) => state.loaded
);

export const getLaunchDetailLoading = createSelector(
  getLaunchDetailState,
  (state: any) => state.loading
);
