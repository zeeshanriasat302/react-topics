import React, { Component } from 'react'
import ForwardingRefs from './ForwardingRefs'

export class FRParentInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
            <ForwardingRefs ref={this.inputRef}/>
            <button onClick={this.clickHandler} >Focus input</button>
      </div>
    )
  }
}

export default FRParentInput