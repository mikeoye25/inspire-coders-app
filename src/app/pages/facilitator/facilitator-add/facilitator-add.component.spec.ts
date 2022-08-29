import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorAddComponent } from './facilitator-add.component';

describe('FacilitatorAddComponent', () => {
  let component: FacilitatorAddComponent;
  let fixture: ComponentFixture<FacilitatorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitatorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitatorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
