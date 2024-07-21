import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2024Component } from './durgotsav2024.component';

describe('Durgotsav2024Component', () => {
  let component: Durgotsav2024Component;
  let fixture: ComponentFixture<Durgotsav2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgotsav2024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgotsav2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
