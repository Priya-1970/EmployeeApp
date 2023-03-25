package com.Employee_Crud.controller;

import com.Employee_Crud.exception.ResourceNotFoundException;
import com.Employee_Crud.model.Employee;
import com.Employee_Crud.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeCtrl {
    @Autowired
    private EmployeeRepo employeeRepo;
    @GetMapping("/emp")
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }
    @PostMapping("/emp")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepo.save(employee);
    }
    @GetMapping("/emp/empId/{empId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int empId){
        Employee employee = employeeRepo.findByEmpId(empId)
                .orElseThrow(()->new ResourceNotFoundException("sorry couldn't get employee with "+empId));
        return ResponseEntity.ok(employee);
    }
    @GetMapping("/emp/empName/{empName}")
    public ResponseEntity<List<Employee>> getEmployeeByName(@PathVariable String empName){
        List<Employee> employees = employeeRepo.findAllByEmpName(empName)
                .orElseThrow(()->new ResourceNotFoundException("Sorry, couldn't find employees with name "+empName));
        return ResponseEntity.ok(employees);
    }
    @GetMapping("/emp/empDept/{empDept}")
    public ResponseEntity<List<Employee>> getEmployeeByDept(@PathVariable String empDept){
        List<Employee> employees = employeeRepo.findAllByEmpDept(empDept)
                .orElseThrow(()->new ResourceNotFoundException("Sorry, couldn't find employees with name "+empDept));
        return ResponseEntity.ok(employees);
    }


    @PutMapping("/emp/{empId}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable int empId,@RequestBody Employee uEmployee){
        Employee employee = employeeRepo.findById(empId)
                .orElseThrow(()->new ResourceNotFoundException("sorry couldn't update employee with "+empId));
        employee.setEmpName(uEmployee.getEmpName());
        employee.setEmpDept(uEmployee.getEmpDept());
        employee.setEmpDes(uEmployee.getEmpDes());
        employee.setEmpSal(uEmployee.getEmpSal());
        Employee fuEmployee=employeeRepo.save(employee);
        return ResponseEntity.ok(fuEmployee);
    }
    @DeleteMapping("/emp/{empId}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployeeById(@PathVariable int empId){
        Employee employee=employeeRepo.findById(empId).
                orElseThrow(()->new ResourceNotFoundException("sorry couldn't update employee with "+empId));

        employeeRepo.delete(employee);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
