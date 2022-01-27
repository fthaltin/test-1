import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule, MatProgressSpinnerModule } from "@angular/material";
import { RelativeTimePipe } from "./../core/helpers/pipes/relative-time/relative-time.pipe";

import { LaunchListComponent } from "./launch-list.component";
import { LaunchFacadeService } from "../services/launch-facade.service";
import { GraphQLModule } from "../graphql.module";

describe("LaunchListComponent", () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListComponent, RelativeTimePipe],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot([]),
        GraphQLModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
