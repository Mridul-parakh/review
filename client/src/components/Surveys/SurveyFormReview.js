import React from 'react';
import {connect} from 'react-redux';
import * as action from '../action/action';
import {withRouter} from 'react-router-dom'

function SurveyFormReview(props) {
  return (
    <div className="left" style={{textAlign:"left"}}>
      <h1>Plz confirm yr entries</h1>
      <div>
        <div>
          <label>
            Servey Title
          </label>
          <div>{props.formValues.title}</div>
        </div>
        <div>
          <label>
            Subject Line
          </label>
          <div>{props.formValues.subject}</div>
        </div>
        <div>
          <label>
          Email Body
          </label>
          <div>{props.formValues.body}</div>
        </div>
        <div>
          <label>
          Recipients List
          </label>
          <div>{props.formValues.recipients}</div>
        </div>
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={props.onCancel}>
        Back
      </button>

      <button onClick={()=>props.submitServey(props.formValues,props.history)} className="green btn-flat right white-text" style={{float:"right"}}>
          Send Servey
          <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  
return{
   formValues:state.form.surveyForm.values
};
}

export default connect(mapStateToProps,action)(withRouter(SurveyFormReview));
