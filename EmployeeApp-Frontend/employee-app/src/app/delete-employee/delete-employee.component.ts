import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
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

  deleteEmployeeById(empId:number){
    this.employeeService.deleteEmployeeById(empId).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }

}
