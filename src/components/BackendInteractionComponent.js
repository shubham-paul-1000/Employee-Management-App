import axios from "axios";
const url = "http://localhost:8080/employeeManagement";

function getAllEmployees()
{
    return axios.get(url+'/employeeList');
}
function addEmployee(employee)
{
    return axios.post(url+'/addEmployee',employee);
}
function editEmployee(employee)
{
    return axios.put(url+'/editEmployee',employee);
}