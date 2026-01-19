import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCedit } from './post-edit.component';

describe('PostCedit', () => {
  let component: PostCedit;
  let fixture: ComponentFixture<PostCedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
