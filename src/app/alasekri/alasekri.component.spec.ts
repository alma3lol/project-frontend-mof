import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlasekriComponent } from './alasekri.component';

describe('AlasekriComponent', () => {
  let component: AlasekriComponent;
  let fixture: ComponentFixture<AlasekriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlasekriComponent]
    });
    fixture = TestBed.createComponent(AlasekriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
