import axios from 'axios';

const instance=axios.create({
    baseURL:"http://localhost:4002/"
})



//baseURL:"http://localhost:9000"


export default instance;