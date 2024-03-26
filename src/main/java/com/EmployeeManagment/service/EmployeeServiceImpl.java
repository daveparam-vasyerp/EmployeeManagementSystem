package com.EmployeeManagment.service;

import com.EmployeeManagment.dto.EmployeeDto;
import com.EmployeeManagment.exception.ResourceNotFoundException;
import com.EmployeeManagment.model.Employee;
import com.EmployeeManagment.repository.EmployeeRepository;
import com.EmployeeManagment.service.api.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public List<Employee> allEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(long employee_id) {
        return employeeRepository.findById(employee_id).orElseThrow(()-> new ResourceNotFoundException(("Employee not found by id:"+ employee_id)));
    }

    @Override
    public Employee saveEmployee(EmployeeDto employeeDto) {
        Employee employee=new Employee();
        employee.setEmployee_firstName(employeeDto.getEmployee_firstName());
        employee.setEmployee_lastName(employeeDto.getEmployee_lastName());
        employee.setEmployee_email(employeeDto.getEmployee_email());
        return employeeRepository.save(employee);
    }

    @Override
    public String deleteEmployee(long employee_id) {
        employeeRepository.deleteById(employee_id);
        return "Employee is deleted";
    }

    @Override
    public Employee updateEmployee(long employee_id,EmployeeDto employeeDto) {
        Employee currentEmployee = employeeRepository.findById(employee_id).orElseThrow(()-> new ResourceNotFoundException("Employee not found: " + employee_id));
        if(employeeDto.getEmployee_firstName()!=null && !employeeDto.getEmployee_firstName().isEmpty()) {
            currentEmployee.setEmployee_firstName(employeeDto.getEmployee_firstName());
        }
        if(employeeDto.getEmployee_lastName()!=null && !employeeDto.getEmployee_lastName().isEmpty()){
            currentEmployee.setEmployee_lastName(employeeDto.getEmployee_lastName());
        }
        if (employeeDto.getEmployee_email()!=null && !employeeDto.getEmployee_email().isEmpty()){
            currentEmployee.setEmployee_email(employeeDto.getEmployee_email());
        }
        employeeRepository.save(currentEmployee);
        return currentEmployee;
    }

}
