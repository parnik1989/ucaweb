import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2022Component } from './durgotsav2022.component';

describe('Durgotsav2022Component', () => {
  let component: Durgotsav2022Component;
  let fixture: ComponentFixture<Durgotsav2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgotsav2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgotsav2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
