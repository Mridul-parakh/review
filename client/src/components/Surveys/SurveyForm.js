import React, { Component } from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';

class SurveyForm extends Component {
    renderField=()=>{
        return(
            <div style={{textAlign:"left"}}>
                <Field
                label="Survey Title"
        type="text"
        name="title"
        component={SurveyField}
        />
           <Field
                label="Subject Line"
        type="text"
        name="subject"
        component={SurveyField}
        />
             <Field
                label="Email Body"
        type="text"
        name="body"
        component={SurveyField}
        />
             <Field
                label="Recipients List"
        type="text"
        name="recipients"
        component={SurveyField}
        />
          
            </div>
        )
    }
  render() {
    return (
      <div>
          <form onSubmit={this.props.handleSubmit(()=>this.props.onSurveySubmit())}>
        {this.renderField()}
        <Link to='/serveys' className="red btn-flat white-text left">
            Cancel
        </Link>
        <button type="submit"
        className='teal btn-flat right white-text'
        >Next
        <i className='material-icons right'>done</i>
        </button>
        </form>
      </div>
    )
  }
}

function validate(values){
const errors={};

if(!values.title){
    errors.title='You must provide title'
}

if(!values.subject){
  errors.subject='You must provide subject';
}
if(!values.body){
  errors.body='You must provide body';
}
errors.recipients=validateEmail(values.recipients||'');
if(!values.recipients){
  errors.recipients='You must provide recipients';
}

return errors;
}

export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);
