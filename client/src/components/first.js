import React, { Component } from 'react';
import axios from 'axios';

class First extends Component {
constructor(props){
super(props);
this.state={
    mess:{}
}
}
    componentDidMount(){
        axios.get('/auth/google')
        .then(data=>{
            this.setState({
                mess:data
            })
        })
    }
  render() {
    return (
      <div>
        hh{this.state.mess}
      </div>
    )
  }
}

export default First;