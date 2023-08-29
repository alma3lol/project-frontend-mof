import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohamedComponent } from './mohamed.component';

describe('MohamedComponent', () => {
  let component: MohamedComponent;
  let fixture: ComponentFixture<MohamedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MohamedComponent]
    });
    fixture = TestBed.createComponent(MohamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
