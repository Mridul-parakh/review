import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as action from '../action/action';

class Payments extends Component {
  render() {
      
    return (
      <div>
        <StripeCheckout
        name="Emaily"
        
        amount={500}
        token={token=>this.props.handkeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
        <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    )
  }
}


export default connect(null,action)(Payments);