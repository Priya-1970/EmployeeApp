import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  empId: number=0;
  

  constructor(private employeeService:EmployeeService,
    private router:Router,private route:ActivatedRoute){}

  
    
  ngOnInit(): void {
  this.empId=this.route.snapshot.params['empId'];
  this.employeeService.getEmployeeById(this.empId).subscribe(employee => {
  this.employee = employee;
 });
 console.log(this.empId)
   }
 
  saveEmployees1(){
    this.employeeService.updateEmployee(this.empId,this.employee).subscribe(data=>{
        console.log(data)
        this.navigateEmployeeList()
    },
    error => console.log(error))
  }

  navigateEmployeeList(){
    this.router.navigate(['/list-employee'])
  }

  onSubmit(){
    this.saveEmployees1();
  }

}
