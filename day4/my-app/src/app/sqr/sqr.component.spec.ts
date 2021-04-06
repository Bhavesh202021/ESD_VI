import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqrComponent } from './sqr.component';

describe('SqrComponent', () => {
  let component: SqrComponent;
  let fixture: ComponentFixture<SqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
