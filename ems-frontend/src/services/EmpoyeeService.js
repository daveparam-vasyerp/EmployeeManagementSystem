import axios from "axios";
import EmployeeComponent from "../components/EmployeeComponent";

const   REST_API_BASE_URLk='http://localhost:8082/employees';

export const listEmployees=()=>{
        return axios.get(REST_API_BASE_URLk);
}

// const REST_API_ADD_DATA='http://localhost:8082/employee/add-employee';

export const addEmployee=(employee)=>{
        debugger
        return axios.post(REST_API_BASE_URLk,employee);
}
export const getEmployee=(employeeId) =>{
        return axios.get(REST_API_BASE_URLk+'/'+employeeId);
}
export const updateEmployee=(employeeId,employee)=>axios.put(REST_API_BASE_URLk +'/'+employeeId,employee);

export const deleteEmployee=(employeeId)=>axios.delete(REST_API_BASE_URLk + '/' + employeeId);