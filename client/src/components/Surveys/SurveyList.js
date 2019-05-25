import React, { Component } from 'react';
import {fetchServeys} from '../action/action';
import {connect} from 'react-redux';

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchServeys();
    }
    renderServey=()=>{
        return this.props.servey.reverse().map(servey=>{
            return(
                <div className="card  darken-1" key={servey._id}>
                <div className="card-content text-white">
                  <span className="card-title">{servey.title}</span>
                  <p>{servey.body}</p>
                  <p className="right">
                      Sent On:{new Date(servey.dateSent).toLocaleDateString()}
                  </p>
                </div>
               <div className="card-action">
                    <a href='/'>Yes:{servey.yes}</a>
                    <a href='/'>No:{servey.no}</a>
               </div>
              </div>
            )
        })
    }
    render() {
        console.log(this.props.servey);
        return (
            <div>
              {this.renderServey()}  
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{servey:state.servey}
    }

export default connect(mapStateToProps,{fetchServeys})(SurveyList);
