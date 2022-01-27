import { createAction, props } from "@ngrx/store";

export const loadLaunchDetail = createAction(
  "[LaunchDetail] Load Launch Detail",
  props<{ payload: string }>()
);

export const loadLaunchDetailSuccess = createAction(
  "[LaunchDetail] Load Launch Detail Success",
  props<{ payload: any[] }>()
);

export const loadLaunchDetailFail = createAction(
  "[LaunchDetail] Load Launch Detail Fail",
  props<{ payload: any }>()
);

export type LaunchDetailAction =
  | typeof loadLaunchDetail
  | typeof loadLaunchDetailSuccess
  | typeof loadLaunchDetailFail;
