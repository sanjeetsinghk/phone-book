import axios from 'axios';
import config from '../config';


const Communication = {
    getMethod(endpoint) {
        // return axios.get(config.baseUrl + endpoint)
        
        //     .then(response => {
        //         console.log(response);
        //         return response.data;
        //     })
      return  fetch('http://localhost:3000/posts') 
       
       
    }
};
export default Communication;