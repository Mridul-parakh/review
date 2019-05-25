import axios from 'axios';
import {FETCH_USER,FETCH_SERVEYS} from './types';


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
    
// export const submitServey=(values,history)=>dispatch=>{

//     axios.post('/api/serveys',values)
//     .then(res=>{
//         history.push('/serveys')
//        return dispatch({
//             type:FETCH_USER,
//             payload:res.data
//         })
//     });
 
// }


export const submitServey = (values, history) => async dispatch => {
    const res = await axios.post('/api/serveys', values);
  
    history.push('/serveys');
    dispatch({ type: FETCH_USER, payload: res.data })
  };

export const fetchServeys=()=>dispatch=>{
    axios.get('/api/serveys').then(res=>dispatch({
        type:FETCH_SERVEYS,
        payload:res.data
    }))
}