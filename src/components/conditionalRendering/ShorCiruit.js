import React, { Component } from 'react'

export class ShorCiruit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : true
      }
    }
  render() {
    return this.state.isLoggedIn && <div>Wecome Zeeshan</div>
  }
}

export default ShorCiruit