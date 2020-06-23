import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinsViewComponent } from './besoins-view.component';

describe('BesoinsViewComponent', () => {
  let component: BesoinsViewComponent;
  let fixture: ComponentFixture<BesoinsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
