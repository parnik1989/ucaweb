import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2023Component } from './durgotsav2023.component';

describe('Durgotsav2023Component', () => {
  let component: Durgotsav2023Component;
  let fixture: ComponentFixture<Durgotsav2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgotsav2023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgotsav2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
