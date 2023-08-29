import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasanComponent } from './hasan.component';

describe('HasanComponent', () => {
  let component: HasanComponent;
  let fixture: ComponentFixture<HasanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasanComponent]
    });
    fixture = TestBed.createComponent(HasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
