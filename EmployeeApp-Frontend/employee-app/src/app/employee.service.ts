import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL="http://localhost:8080/api/v1/emp";


  private baseURL1="http://localhost:8080/api/v1/emp/empId";
  private baseURL2="http://localhost:8080/api/v1/emp/empName";
  private baseURL3="http://localhost:8080/api/v1/emp/empDept";
  
 
  constructor(private httpClient:HttpClient) { }
    
  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  addEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(empId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL1}/${empId}`)
  }
  getEmployeeByName(empName:string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL2}/${empName}`)
  }
  getEmployeeByDept(empDept:string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL3}/${empDept}`)
  }

  updateEmployee(empId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${empId}`, employee);
  }
  searchEmployeeById(empId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL1}/${empId}`)
  }
  searchEmployeeByName(empName:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL2}/${empName}`)
  }
  searchEmployeeByDept(empDept:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL3}/${empDept}`)
  }
  deleteEmployeeById(empId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${empId}`)
  }
  

}
