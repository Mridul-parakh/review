import {FETCH_SERVEYS} from '../action/types';

//import React from 'react'

export default function (state=[],action) {
    switch(action.type){
        case FETCH_SERVEYS:return action.payload;
        default:
            return state;
    }
}
