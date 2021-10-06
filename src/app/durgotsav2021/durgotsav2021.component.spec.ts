import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2021Component } from './durgotsav2021.component';

describe('Durgotsav2021Component', () => {
  let component: Durgotsav2021Component;
  let fixture: ComponentFixture<Durgotsav2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgotsav2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgotsav2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
