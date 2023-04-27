import React, { Component } from 'react'

export class IfElse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    if(this.state.isLoggedIn)
    return (
      <div>Hello rendering if</div>
    )
    else{
        return (
            <div>Hi rendering else</div>
          )  
    }
  }
}

export default IfElse