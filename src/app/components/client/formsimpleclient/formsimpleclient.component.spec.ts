import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsimpleclientComponent } from './formsimpleclient.component';

describe('FormsimpleclientComponent', () => {
  let component: FormsimpleclientComponent;
  let fixture: ComponentFixture<FormsimpleclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsimpleclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsimpleclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
