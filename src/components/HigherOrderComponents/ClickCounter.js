import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {

  render() {
    //const {count, incrementCount} = this.prop
    return (
      <button onClick={this.props.incrementCount}>  Clicked {this.props.count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)