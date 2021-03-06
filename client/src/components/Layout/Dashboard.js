import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from '../Surveys/SurveyList';


function Dashboard() {
  return (
    <div>
      <SurveyList/>
      <div className="fixed-action-btn">
  <Link to="/serveys/new" className="btn-floating btn-large red">
  <i className="material-icons">add</i>
  </Link>

</div>
    </div>
  )
}


export default Dashboard;