import React from 'react';
import {useState} from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';

import profilePic from "../resources/download2.png"
import './Row.css';


function ExpandComponent(props){
    const[count, setCount]=useState(false);
    const[editDiv,setEditDiv]=useState(false);
    const axios=require('axios');
    let tempDataId=props.id;
    let tempData={"FirstName": props.FirstName,
  "LastName": props.LastName,
  "EmailId": props.EmailId,
  "Location": props.Location};
    return (
            <tbody>
                {editDiv?<div className='editBack'>
                <div className='edit'><form>
                <div className='inputText'><input type="text" onChange={(e)=>{tempDataId=e.target.value}} defaultValue={props.id} id='uid' placeholder='Enter UID' required/></div>
                <div className='inputText'><input type="text" onChange={(e)=>{tempData.FirstName=e.target.value}} defaultValue={props.FirstName} id='firstname' placeholder='Enter First Name' required/></div>
                <div className='inputText'><input type="text" onChange={(e)=>{tempData.LastName=e.target.value}} defaultValue={props.LastName} id='lastname' placeholder='Enter Last Name' required/></div>
                <div className='inputText'><input type="email" onChange={(e)=>{tempData.EmailId=e.target.value}} defaultValue={props.EmailId} id='emailid' placeholder='Enter Email Id' required/></div>
                <div className='inputText'><input type="text" onChange={(e)=>{tempData.Location=e.target.value}} defaultValue={props.Location} id='location' placeholder='Enter Location' required/></div>
                <div className='choose'><label>Profile Picture:</label><input type="file" id='profilpic' accept="image/png, image/jpeg"/></div>
                <button className='addUp' type='submit' onClick={()=>{
                    axios.put('http://localhost:8020/employeeList/'+tempDataId+'/',{...tempData})
                    .then(response => {
                        console.log(response);
                    }).catch(error => {
                        console.log(error);
                    });
                }}>Save</button>
                <button className='cancel' onClick={()=>{setEditDiv(false)}}>Cancel</button>
                </form></div>
                </div>:null}
        <tr className='previewRow'>
            <td>
                {props.id}
            </td>
            <td>
                {props.FirstName}
            </td>
            <td>
                {props.LastName}
            </td>
            <td>
                {props.EmailId}
            </td>
            <td className='expandCell'>
        <button className="expandButton" onClick={()=>setCount(!count)}>{count?(<MdOutlineExpandLess/>):(<MdOutlineExpandMore/>)}</button>
        </td>
        </tr>
        {count && <tr className='expand'>
            <td colSpan="5">
                <div className='card'>
                    <span className='image'><img src={profilePic} width="250px" height="200px"/></span>
            <span className='details'><span className='firstName'><b>First Name: </b>{props.FirstName}</span>
            <span className='lastName'><b>Last Name: </b>{props.LastName}</span>
            <button className='btn' onClick={()=>{setEditDiv(true)}}><FiEdit/></button>
            <button className='btn' onClick={()=>{
                    axios.delete('http://localhost:8020/employeeList/'+props.id)
                    .then(response => {
                        console.log(response.data)
                    }).catch(error => {
                        console.log(error);
                    });
                }}><AiOutlineDelete/></button>
            <div className='Tech'><b>Location: </b>{props.Location}</div>
            </span>
            </div>
            </td>
        </tr>}
        </tbody>);
}
export default ExpandComponent;