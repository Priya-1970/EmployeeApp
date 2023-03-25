import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{

  employees?: Employee[];

  constructor(private employeeService:EmployeeService,private router:Router){
    
  }

  ngOnInit():void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees=data;
    });
  }

  updateEmployeeById(empId:number){
    this.router.navigate(['update-employee',empId])
  }

 /* deleteEmployeeById(empId:number){
    this.employeeService.deleteEmployeeById(empId).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }*/

}