import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLocationComponent } from './path-location.component';

describe('PathLocationComponent', () => {
  let component: PathLocationComponent;
  let fixture: ComponentFixture<PathLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
