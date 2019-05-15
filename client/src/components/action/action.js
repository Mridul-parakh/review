import axios from 'axios';
import {FETCH_USER} from './types';


 export const fetchUser=()=>dispatch=>{
    axios.get('/api/authroute')
    .then(res=>dispatch({
        type:FETCH_USER,
        payload:res.data
    }))
    }

    export const handkeToken=(token)=>dispatch=>{
        axios.post('/api/stripe',token)
        .then(res=>dispatch({
            type:FETCH_USER,
            payload:res.data
        }))
        }
    
