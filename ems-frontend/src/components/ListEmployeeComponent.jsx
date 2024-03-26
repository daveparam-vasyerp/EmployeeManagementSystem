import React,{useEffect, useState} from 'react'
import {deleteEmployee, listEmployees} from '../services/EmpoyeeService'
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {



  const[employee,setEmployees]= useState([])

//   We Pass the useNavigator function to the one variable const
  const navigator=useNavigate();

    useEffect(()=>{
           getAllEmployees();
    },[])

    useEffect(() => {
        employee.map(employee => {
          console.log('Employee ID:', employee.employee_id);
        });
      }, []);
      // This is the function for OnClick of the Add Button 

      function getAllEmployees(){
        listEmployees().then((Response)=>{
          setEmployees(Response.data)
      }).catch(error=>{
          console.error(error);
      })
      }
      function addNewEmployee(){
        navigator('/add-employee')
      }

      function updateEmployee(employee_id){
        navigator(`/update-employee/${employee_id}`)
      }
      function removeEmployee(employee_id){
        // navigator(`/delete-employee/${employee_id}`)
        console.log("Employee with id "+employee_id+" is  deleted successfully");
        deleteEmployee(employee_id).then((response)=>{
          getAllEmployees();
          toast.success("Employee Is Deleted Successfully")
        }).catch(error=>{
          console.error(error);
        })
      }

     
  return (
    <div className='container' style={{ maxHeight: "500px", 
    overflowY: "auto" }}>
        <h2 className='text-capitalize text-center'>List Of Employees</h2>
        <button className='btn btn-primary mb-2 ' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-dark table-striped table-border table table-dark table-sm striped bordered hover'>
            <thead >
            <tr>
            <th>Employee Id</th>
            <th>FirstName</th>
            <th>LastNane</th>
            <th>EmailId</th>
            <th>Actions</th>
            <th></th>
            
            </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee=>
                        <tr key={employee.employee_id}>
                            <td>{employee.employee_id}</td>
                            <td>{employee.employee_firstName}</td>
                            <td>{employee.employee_lastName}</td>
                            <td>{employee.employee_email}</td>
                            <td><button className='btn btn-info' onClick={()=> updateEmployee(employee.employee_id)}>Update</button></td>
                            <td><button np className='btn btn-danger'onClick={()=> removeEmployee(employee.employee_id)}>Delete</button></td>
                        </tr>
                        )
                }
              
            </tbody>
            
        </table>
        
    </div>
  )
}

export default ListEmployeeComponent
