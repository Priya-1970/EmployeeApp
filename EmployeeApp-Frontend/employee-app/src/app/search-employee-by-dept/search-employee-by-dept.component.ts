import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employee-by-dept',
  templateUrl: './search-employee-by-dept.component.html',
  styleUrls: ['./search-employee-by-dept.component.css']
})
export class SearchEmployeeByDeptComponent {
  employee: Employee[]=[];
  empId: number=0;
  empName: string='';
  empDept: string='';
 
   
    constructor(private employeeService:EmployeeService,
      private router:Router,private route:ActivatedRoute){}
  
      searchEmployeeByDept() { 
          this.employeeService.getEmployeeByDept(this.empDept).subscribe((employee) => {
              this.employee = employee;
          });
        }
}
