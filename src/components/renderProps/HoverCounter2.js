import React, { Component } from 'react'

export class HoverCounter2 extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <h1 onMouseOver={incrementCount}> Clicked {count} times</h1>
    )
  }
}

export default HoverCounter2