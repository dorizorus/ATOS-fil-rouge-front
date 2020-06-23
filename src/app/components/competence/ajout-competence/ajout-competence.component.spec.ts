import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCompetenceComponent } from './ajout-competence.component';

describe('AjoutCompetenceComponent', () => {
  let component: AjoutCompetenceComponent;
  let fixture: ComponentFixture<AjoutCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
