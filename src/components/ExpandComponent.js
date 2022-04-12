import React from 'react';
import {useState} from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import profilePic from "../resources/download2.png"
import './Row.css';


function ExpandComponent(props){
    const[count, setCount]=useState(false);
    const[editDiv,setEditDiv]=useState(false);
    return (
            <tbody>
                {editDiv?<div className='editBack'>
                <div className='edit'><form>
                <div className='inputText'><input type="text" defaultValue={props.UId} id='uid' placeholder='Enter UID' required/></div>
                <div className='inputText'><input type="text" defaultValue={props.FirstName} id='firstname' placeholder='Enter First Name' required/></div>
                <div className='inputText'><input type="text" defaultValue={props.LastName} id='lastname' placeholder='Enter Last Name' required/></div>
                <div className='inputText'><input type="email" defaultValue={props.EmailId} id='emailid' placeholder='Enter Email Id' required/></div>
                <div className='inputText'><input type="text"  defaultValue={props.Technology} id='technology' placeholder='Enter Technology' required/></div>
                <div className='choose'><label>Profile Picture:</label><input type="file" id='profilpic'/></div>
                <button className='addUp' type='submit'>Edit</button>
                <button className='cancel' onClick={()=>{setEditDiv(false)}}>Cancel</button>
                </form></div>
                </div>:null}
        <tr className='previewRow'>
            <td>
                {props.UId}
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
            <td colspan="5">
                <div className='card'>
                    <span className='image'><img src={profilePic} width="250px" height="200px"/></span>
            <span className='details'><span className='firstName'><b>First Name: </b>{props.FirstName}</span>
            <span className='lastName'><b>Last Name: </b>{props.LastName}</span>
            <button className='btn' onClick={()=>{setEditDiv(true)}}><FiEdit/></button>
            <button className='btn'><AiOutlineDelete/></button>
            <div className='Tech'><b>Technology: </b>{props.Technology}</div>
            </span>
            </div>
            </td>
        </tr>}
        </tbody>);
}
export default ExpandComponent;