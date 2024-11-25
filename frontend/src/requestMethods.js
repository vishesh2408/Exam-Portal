// import axios from 'axios';


// const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; 

// export const publicRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });





import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Update this to your backend URL
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
