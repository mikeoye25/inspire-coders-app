import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingForumDetailComponent } from './upcoming-forum-detail.component';

describe('UpcomingForumDetailComponent', () => {
  let component: UpcomingForumDetailComponent;
  let fixture: ComponentFixture<UpcomingForumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingForumDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingForumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
