package com.Employee_Crud.repository;

import com.Employee_Crud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


    @Repository
    public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
        Optional<Employee> findByEmpId(int empId);
        Optional<List<Employee>> findAllByEmpName(String empName);
        Optional<List<Employee>> findAllByEmpDept(String empDept);
    }



