package com.EmployeeManagment.service.api;

import com.EmployeeManagment.dto.EmployeeDto;
import com.EmployeeManagment.model.Employee;

import java.util.List;

public interface EmployeeService {
    public List<Employee>allEmployees();
    public Employee getEmployeeById(long employee_id);
    public Employee saveEmployee(EmployeeDto employeeDto);
    public String deleteEmployee(long employee_id);
    public Employee updateEmployee(long employee_id,EmployeeDto employeeDto);


}
