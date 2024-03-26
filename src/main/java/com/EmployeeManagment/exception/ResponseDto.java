package com.EmployeeManagment.exception;

import lombok.*;
import org.hibernate.annotations.NaturalIdCache;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseDto {

    private String message;
    private HttpStatus status;
    private boolean success;
}
