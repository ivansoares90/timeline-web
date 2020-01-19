import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComposerComponent } from './post-composer.component';

describe('PostComposerComponent', () => {
  let component: PostComposerComponent;
  let fixture: ComponentFixture<PostComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
