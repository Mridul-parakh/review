import {combineReducers} from 'redux';
import authReducer from './authReducer';
import serveyReducer from './serveyReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    auth:authReducer,
    form:reduxForm,
    servey:serveyReducer
});