import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../services/EmpoyeeService'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  
  const[errors,setErrorrs]=useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const navigator=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    if(id){
      getEmployee(id).then((response)=>{
        setFirstName(response.data.employee_firstName);
        setLastName(response.data.employee_lastName);
        setEmail(response.data.employee_email);
      }).catch(error=>{
        console.error(error);
      })
    }
  },[])

    function saveOrUpdateEmployee(e){
      const employee={employee_firstName: firstName,employee_lastName:lastName,employee_email:email};
      console.log(employee)
        e.preventDefault();
        if(validateForm()){
          if(id){
              updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees');
              }).catch(error=>{
                console.error(error);
              })
          }else{
            addEmployee(employee).then((response)=>{
              console.log(response.data);
              navigator('/employees')
      
            }).catch(error=>{
              console.error(error);
            })
          }
         

      
        }
        
    }

    function validateForm(){
      let valid=true;
      const errorsCopy={... errors}
      if(firstName.trim()){
        errorsCopy.firstName='';
      }
      else{
        errorsCopy.firstName='First Name is Required';
        valid=false;
      }
      if(lastName.trim()){
        errorsCopy.lastName='';
      }
      else{
        errorsCopy.lastName="Last Name is Required";
        valid=false;
      }
      if(email.trim()){
        errorsCopy.email='';
      }
      else{
        errorsCopy.email="Email is Required";
        valid=false;
      }
      setErrorrs(errorsCopy);
      return valid;

    }

    function pageTitle(){
        if(id){
         return <h2 className='text-capitalize text-center'>Update Employee</h2>
       
        }
        else{
         return <h2 className='text-capitalize text-center'>Add Employee</h2>
        }
    }
  return (
    <div className='container'>
      <br/><br />
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
        {
          pageTitle()
        }
        <div className='card-body'>
        <form >
            <div className='form-group mb-2'>
              <label className='form-lable'>FirstName</label>
              <input 
                type='text'
                placeholder='Enter FirstName'
                name='FirstName'
                value={firstName}
                className={`form-control ${ errors.firstName ? 'is-invalid':''}`}
                onChange={(e)=>setFirstName(e.target.value)}
              ></input>
              {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
            </div>
            <div className='form-group mb-2'>
              <label className='form-lable'>LastName</label>
              <input 
                type='text'
                placeholder='Enter LastName'
                name='LastName'
                value={lastName}
                className={`form-control ${ errors.lastName ? 'is-invalid':''}`}
                onChange={(e)=>setLastName(e.target.value)}
              ></input>
              {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
            </div>
            <div className='form-group mb-2'>
              <label className='form-lable'>Email</label>
              <input 
                type='text'
                placeholder='Enter Email'
                name='Email'
                value={email}
                className={`form-control ${ errors.email ? 'is-invalid':''}`}
                onChange={(e)=>setEmail(e.target.value)}
              ></input>
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>
            <button className='btn btn-success'onClick={saveOrUpdateEmployee}>
              Submit
            </button>
           </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EmployeeComponent