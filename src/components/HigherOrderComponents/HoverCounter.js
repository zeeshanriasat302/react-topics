import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {

  render() {
    //const {count, incrementCount} = this.prop
    return (
      <h1 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h1>
    )
  }
}

export default UpdatedComponent(HoverCounter)