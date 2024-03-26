package com.EmployeeManagment.mapper;

import com.EmployeeManagment.dto.EmployeeDto;
import com.EmployeeManagment.model.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(EmployeeDto employeeDto) {
       return new EmployeeDto(
               employeeDto.getEmployee_firstName(),
               employeeDto.getEmployee_lastName(),
               employeeDto.getEmployee_email()
       );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getEmployee_firstName(),
                employeeDto.getEmployee_lastName(),
                employeeDto.getEmployee_email()
        );
    }
}
