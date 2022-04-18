import axios from "axios";
export default axios.create(
    { baseURL: "http://localhost:8020/",
    header:{'Access-Control-Allow-Origin': true}
});