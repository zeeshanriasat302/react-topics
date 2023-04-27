import React, { Component } from 'react'

export class ClassEventHandling extends Component {
    eventHandler(){
        console.log("class handler")
    }

    render() {

    return (
      <div>
      <button onClick = {this.eventHandler} >click class</button>
      </div>
    )
  }
}

export default ClassEventHandling