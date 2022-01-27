import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule, MatProgressSpinnerModule } from "@angular/material";

import { LaunchDetailsComponent } from "./launch-details.component";
import { GraphQLModule } from "../graphql.module";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent],
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
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
