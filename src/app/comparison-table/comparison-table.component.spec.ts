import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTableComponent } from './comparison-table.component';

describe('ComparisonTableComponent', () => {
  let component: ComparisonTableComponent;
  let fixture: ComponentFixture<ComparisonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
