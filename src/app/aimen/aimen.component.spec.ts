import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimenComponent } from './aimen.component';

describe('AimenComponent', () => {
  let component: AimenComponent;
  let fixture: ComponentFixture<AimenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AimenComponent]
    });
    fixture = TestBed.createComponent(AimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
