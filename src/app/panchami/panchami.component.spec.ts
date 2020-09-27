import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchamiComponent } from './panchami.component';

describe('PanchamiComponent', () => {
  let component: PanchamiComponent;
  let fixture: ComponentFixture<PanchamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
