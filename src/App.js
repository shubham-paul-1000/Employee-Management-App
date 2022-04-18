import React,{useState} from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TableComponent from './components/TableComponent';
import { HiPlus } from "react-icons/hi";
import employees from './employees.json';
import axios from 'axios';
import api from './components/BaseAxios';
import { useEffect } from 'react';
//import {writeJsonFile} from 'write-json-file';


function App() {
  const[inputVal,setInputVal]=useState('');
  const[loginDiv,setLoginDiv]=useState(false);
  let datas=employees.employeeList;
  let temp={"id": "",
  "FirstName": "",
  "LastName": "",
  "EmailId": "",
  "Location": ""};
  /*useEffect(()=>{
    const getDatas = async()=> {
      datas = await getAllEmployees(); 
  }},[]);

  const getAllEmployees = async()=>{
    const response= await api.get("/employeeList");
    return response.employeeList;
  };*/
  const axios=require('axios');
  axios.get('http://localhost:8020/employeeList')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log("function executed");// always executed
  });

  return (
    <div className="App">
      {loginDiv?<div>
        <div className='loginBack'></div>
        <div className='login'><form>
        <div className='inputText'><input type="text" id='uid' onChange={(e)=>{temp.id=e.target.value}} placeholder='Enter UID' required/></div>
        <div className='inputText'><input type="text" id='firstname' onChange={(e)=>{temp.FirstName=e.target.value}} placeholder='Enter First Name' required/></div>
        <div className='inputText'><input type="text" id='lastname' onChange={(e)=>{temp.LastName=e.target.value}} placeholder='Enter Last Name' required/></div>
        <div className='inputText'><input type="email" id='emailid' onChange={(e)=>{temp.EmailId=e.target.value}} placeholder='Enter Email Id' required/></div>
        <div className='inputText'><input type="text" id='location' onChange={(e)=>{temp.Location=e.target.value}} placeholder='Enter Location' required/></div>
        <div className='choose'><label>Profile Picture:</label><input type="file" id='profilpic' accept="image/png, image/jpeg"/></div>
        <button className='addUp' type='submit' onClick={()=>{
          axios.post('http://localhost:8020/employeeList',temp).then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            console.log("function executed");// always executed
          });
          setLoginDiv(false);
          }}>
            Add</button>
        <button className='cancel' onClick={()=>{setLoginDiv(false)}}>Cancel</button>
    </form>
    </div>
    </div>:null}
      <div><HeaderComponent/></div>
      <div className="EmpList">Employee List</div>
      <div className='Emptable'>
        <div className='search'><span><input id="search" type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)} placeholder="  Search..."/></span><span><button className="addButton" onClick={()=>{setLoginDiv(true)}}><HiPlus/>Add Employee</button></span></div>
        <div><TableComponent inputVal={inputVal} datas={datas}/></div>
      </div>
    </div>
  );
}

/*function getAllEmployees()
{
    return async()=>{let response= await api.get("/employeeList");
    return response.employeeList;}
}

function readJson(){
    return employees;
}
function writeJson(datas){
  const fs=require('./employees.json');
  fs.writeFileSync('./employees.json', {"employeeList": [...datas]});
  //writeJsonFile('employees.json', {employeeList: datas});
}*/

export default App;
