import React,{useState} from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TableComponent from './components/TableComponent';
import { AiOutlinePlus } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";


function App() {
  const[inputVal,setInputVal]=useState('');
  const[loginDiv,setLoginDiv]=useState(false);
  /*const handleSearch = ()=>{
    if(){

    }
  };*/
  return (
    <div className="App">
      {loginDiv?<div>
        <div className='loginBack'></div>
        <div className='login'><form>
        <div className='inputText'><input type="text" id='uid' placeholder='Enter UID' required/></div>
        <div className='inputText'><input type="text" id='firstname' placeholder='Enter First Name' required/></div>
        <div className='inputText'><input type="text" id='lastname' placeholder='Enter Last Name' required/></div>
        <div className='inputText'><input type="email" id='emailid' placeholder='Enter Email Id' required/></div>
        <div className='inputText'><input type="text" id='technology' placeholder='Enter Technology' required/></div>
        <div className='choose'><label>Profile Picture:</label><input type="file" id='profilpic' required/></div>
        <button className='addUp' type='submit'>Add</button>
        <button className='cancel' onClick={()=>{setLoginDiv(false)}}>Cancel</button>
    </form>
    </div>
    </div>:null}
      <div><HeaderComponent/></div>
      <div className="EmpList">Employee List</div>
      <div className='Emptable'>
        <div className='search'><span><input id="search" type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)} placeholder="  Search..."/></span><span><button className="addButton" onClick={()=>{setLoginDiv(true)}}><HiPlus/>Add Employee</button></span></div>
        <div><TableComponent inputVal={inputVal}/></div>
      </div>
    </div>
  );
}

export default App;
