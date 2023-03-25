import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employee-by-id',
  templateUrl: './search-employee-by-id.component.html',
  styleUrls: ['./search-employee-by-id.component.css']
})
export class SearchEmployeeByIdComponent {
  employee: Employee = new Employee();
  empId: number=0;
  empName: string='';
  empDept: string='';
 
   
    constructor(private employeeService:EmployeeService,
      private router:Router,private route:ActivatedRoute){}
  
      searchEmployeeById() {
        this.employeeService.getEmployeeById(this.empId).subscribe((employee) => {
          this.employee = employee;
        });
      }
      
}
