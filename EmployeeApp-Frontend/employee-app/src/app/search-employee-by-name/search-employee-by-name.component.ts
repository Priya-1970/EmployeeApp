import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employee-by-name',
  templateUrl: './search-employee-by-name.component.html',
  styleUrls: ['./search-employee-by-name.component.css']
})
export class SearchEmployeeByNameComponent {
  employee: Employee[] = [];

  empId: number=0;
  empName: string='';
  empDept: string='';
 
   
    constructor(private employeeService:EmployeeService,
      private router:Router,private route:ActivatedRoute){}
  
      searchEmployeeByName() { 
        this.employeeService.getEmployeeByName(this.empName).subscribe((employee) => {
            this.employee = employee;
        });
      }
      
}
