package com.Employee_Crud.model;

import jakarta.persistence.*;
import jdk.jfr.Name;

@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empId;
    @Column(name="Name")
    private String empName;
    @Column(name="Department")
    private String empDept;
    @Column(name="Designation")
    private String empDes;
    @Column(name="Salary")
    private int empSal;

    public Employee(){

    }
    public Employee(int empId, String empName, String empDept, String empDes, int empSal) {
        this.empId=empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empDes = empDes;
        this.empSal = empSal;
    }


    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpDept() {
        return empDept;
    }

    public void setEmpDept(String empDept) {
        this.empDept = empDept;
    }

    public String getEmpDes() {
        return empDes;
    }

    public void setEmpDes(String empDes) {
        this.empDes = empDes;
    }

    public int getEmpSal() {
        return empSal;
    }

    public void setEmpSal(int empSal) {
        this.empSal = empSal;
    }
}
