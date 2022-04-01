import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpBlogComponent } from './wp-blog.component';

describe('WpBlogComponent', () => {
  let component: WpBlogComponent;
  let fixture: ComponentFixture<WpBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
