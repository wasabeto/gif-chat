import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifFinderComponent } from './gif-finder.component';

describe('GifFinderComponent', () => {
  let component: GifFinderComponent;
  let fixture: ComponentFixture<GifFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
