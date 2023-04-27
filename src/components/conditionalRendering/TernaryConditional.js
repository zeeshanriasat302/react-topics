import React, { Component } from 'react'

export class TernaryConditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
  render() {
    return (
        this.state.isLoggedin ? (<div>Welcome Zeeshan</div>) : (<div>Welcome Riasat</div>)
    )
  }
}

export default TernaryConditional