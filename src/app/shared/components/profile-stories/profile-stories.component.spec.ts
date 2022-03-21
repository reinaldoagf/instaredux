import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStoriesComponent } from './profile-stories.component';

describe('ProfileStoriesComponent', () => {
  let component: ProfileStoriesComponent;
  let fixture: ComponentFixture<ProfileStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
