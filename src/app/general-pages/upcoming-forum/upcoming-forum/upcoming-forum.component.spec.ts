import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingForumComponent } from './upcoming-forum.component';

describe('UpcomingForumComponent', () => {
  let component: UpcomingForumComponent;
  let fixture: ComponentFixture<UpcomingForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
