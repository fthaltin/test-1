import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import { PastLaunchesListGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchList, loadLaunchDetail } from "../store/actions";
import {
  getLaunchListState,
  getLaunchList,
  getLaunchListLoaded,
  getLaunchListLoading,
  getLaunchDetailState,
  getLaunchDetail,
  getLaunchDetailLoaded,
  getLaunchDetailLoading
} from "../store/selectors";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  // List
  launchListState$ = this.store.select(getLaunchListState);
  launchList$ = this.store.select(getLaunchList);
  launchListLoaded$ = this.store.select(getLaunchListLoaded);
  launchListLoading$ = this.store.select(getLaunchListLoading);

  // Detail
  launchDetailState$ = this.store.select(getLaunchDetailState);
  launchDetail$ = this.store.select(getLaunchDetail);
  launchDetailLoaded$ = this.store.select(getLaunchDetailLoaded);
  launchDetailLoading$ = this.store.select(getLaunchDetailLoading);

  constructor(
    private readonly store: Store<LaunchListState>,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) {}

  pastLaunchListStoreCache(limit) {
    this.store.dispatch(loadLaunchList({ payload: limit }));
    return this.launchList$;
  }

  pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }

  getLaunchDetailStoreCache(id) {
    this.store.dispatch(loadLaunchDetail({ payload: id }));
    return this.launchDetail$;
  }
}
