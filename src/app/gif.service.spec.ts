import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { GifService } from "./gif.service";

describe("GifService", () => {
  let service: GifService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GifService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have getAll function", () => {
    const service: GifService = TestBed.get(GifService);
    expect(service.getAll).toBeTruthy();
  });

  it("should have searchByQuery function", () => {
    const service: GifService = TestBed.get(GifService);
    expect(service.searchByQuery).toBeTruthy();
  });
});
