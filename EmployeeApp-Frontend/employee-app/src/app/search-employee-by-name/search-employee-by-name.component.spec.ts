import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeByNameComponent } from './search-employee-by-name.component';

describe('SearchEmployeeByNameComponent', () => {
  let component: SearchEmployeeByNameComponent;
  let fixture: ComponentFixture<SearchEmployeeByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployeeByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeeByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
