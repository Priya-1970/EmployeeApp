import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeByDeptComponent } from './search-employee-by-dept.component';

describe('SearchEmployeeByDeptComponent', () => {
  let component: SearchEmployeeByDeptComponent;
  let fixture: ComponentFixture<SearchEmployeeByDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeeByDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeeByDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
