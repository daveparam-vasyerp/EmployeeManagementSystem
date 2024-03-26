package com.EmployeeManagment.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employee_table")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employee_id;
    private String employee_firstName;
    private String employee_lastName;
    private String employee_email;

    public Employee(String employee_firstName, String employee_lastName, String employee_email) {
        this.employee_firstName = employee_firstName;
        this.employee_lastName = employee_lastName;
        this.employee_email = employee_email;
    }
}
