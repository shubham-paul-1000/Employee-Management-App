import React from 'react';
import './Table.css';
import ExpandComponent from './ExpandComponent';

function TableComponent(props){
    const columns = ['UID','First Name','Last Name','Email Id'];
    /*const props.datas = [{"UId": "abcd",
            "FirstName": "xyz",
            "LastName": "abcd",
            "EmailId": "abcd",
            "Technology": "Java, React"},
            {"UId": "abc",
            "FirstName": "ijk",
            "LastName": "abc",
            "EmailId": "abc",
            "Technology": "Java, React"
    }];*/
    const rowFilter=(field)=>{for(let key in field){
        if(field[key].toLowerCase().includes(props.inputVal.toLowerCase()))
        {
            return true;
        }
    }
    return false;
};
    return (
        <table>
        <thead>
        <tr>{columns.map((column)=>(
              <th>
                  {column}
              </th>))}
              <th></th>
            </tr>
        </thead>
            {props.datas.map(data =>{
                if(props.inputVal===''||rowFilter(data))
                {
                return(<ExpandComponent {...data}
            />)}})}
      </table>
    );
}
export default TableComponent;