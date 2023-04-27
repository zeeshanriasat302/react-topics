import React, { Component } from 'react'

export class ElementVariables extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false
      }
    }
  render() {
    let message;
    if(this.state.isLoggedIn){
        message = <div>Welome Zeehsan</div>
    } else {
        message = <div>Welcome Riasat</div>
    }
    return (
      <div>{message}</div>
    )
  }
}

export default ElementVariables