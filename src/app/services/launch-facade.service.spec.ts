import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { LaunchFacadeService } from "./launch-facade.service";
import { StoreModule } from "@ngrx/store";
import { launchReducers } from "../store";
import { GraphQLModule } from "../graphql.module";

describe("LaunchFacadeService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(launchReducers),
        GraphQLModule,
        HttpClientModule
      ]
    })
  );

  it("should be created", () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
