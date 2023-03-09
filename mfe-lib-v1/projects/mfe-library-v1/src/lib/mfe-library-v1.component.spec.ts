import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeLibraryV1Component } from './mfe-library-v1.component';

describe('MfeLibraryV1Component', () => {
  let component: MfeLibraryV1Component;
  let fixture: ComponentFixture<MfeLibraryV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfeLibraryV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeLibraryV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
