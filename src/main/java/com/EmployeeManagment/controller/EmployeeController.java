package com.EmployeeManagment.controller;

import com.EmployeeManagment.dto.EmployeeDto;
import com.EmployeeManagment.model.Employee;
import com.EmployeeManagment.service.api.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping()
    public List<Employee> getAllEmployees() {
       return employeeService.allEmployees();
    }
    @GetMapping("{employee_id}")
    public Employee getEmployeeById(@PathVariable long employee_id) {
        return employeeService.getEmployeeById(employee_id);
    }
    @PostMapping()
    public Employee addEmployee(@RequestBody EmployeeDto employeeDto) {
        return employeeService.saveEmployee(employeeDto);
    }

    @PutMapping("{employee_id}")
    public Employee updateEmployee(@PathVariable long employee_id,@RequestBody EmployeeDto employeeDto) {
        return employeeService.updateEmployee(employee_id,employeeDto);
    }
    @DeleteMapping("{employee_id}")
    public String  deleteEmployee(@PathVariable long employee_id) {
        employeeService.deleteEmployee(employee_id);
        return "Employee Deleted";
    }
}
