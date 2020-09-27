import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgotsavComponent } from './durgotsav.component';

describe('DurgotsavComponent', () => {
  let component: DurgotsavComponent;
  let fixture: ComponentFixture<DurgotsavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurgotsavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgotsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
