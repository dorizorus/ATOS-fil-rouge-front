import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinSingleComponent } from './besoin-single.component';

describe('BesoinSingleComponent', () => {
  let component: BesoinSingleComponent;
  let fixture: ComponentFixture<BesoinSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
