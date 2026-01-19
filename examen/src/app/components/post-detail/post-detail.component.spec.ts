import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail } from './post-detail.component';

describe('PostDetail', () => {
  let component: PostDetail;
  let fixture: ComponentFixture<PostDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
