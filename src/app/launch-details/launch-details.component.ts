import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchFacadeService } from "../services/launch-facade.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchFacade: LaunchFacadeService
  ) {}

  @ViewChild("thumbs", { static: false }) thumbs: ElementRef;

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchFacade.getLaunchDetailStoreCache(id))
  );

  launchDetailsLoading$ = this.launchFacade.launchDetailLoading$;
  launchDetailsLoaded$ = this.launchFacade.launchDetailLoaded$;

  sliderSrc;

  activateImage(src) {
    this.sliderSrc = src;
  }

  scrollLeft() {
    this.thumbs.nativeElement.scrollLeft -= 100;
  }

  scrollRight() {
    this.thumbs.nativeElement.scrollLeft += 100;
  }
}
