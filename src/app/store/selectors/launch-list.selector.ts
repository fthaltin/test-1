import { LaunchState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getLaunchListState = createFeatureSelector<LaunchState>(
  "launchList"
);

export const getLaunchList = createSelector(
  getLaunchListState,
  (state: any) => {
    return state.data;
  }
);

export const getLaunchListLoaded = createSelector(
  getLaunchListState,
  (state: any) => state.loaded
);

export const getLaunchListLoading = createSelector(
  getLaunchListState,
  (state: any) => state.loading
);
