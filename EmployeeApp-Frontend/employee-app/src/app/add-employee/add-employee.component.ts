import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee:Employee=new Employee()

  constructor(private employeeService:EmployeeService,
    private router:Router){}

  ngOnInit(): void {
    
  }

  saveEmployees(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
        console.log(data)
        this.navigateEmployeeList()
    },
    error => console.log(error))
  }

  navigateEmployeeList(){
    this.router.navigate(['/list-employee'])
  }

  onSubmit(){
    this.saveEmployees();
  }
  

}
