import React, { Component } from 'react'
import RefsWithClassComponents from './RefsWithClassComponents'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }

    // accessing parent focus input method
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }


  render() {
    return (
      <div>
      <RefsWithClassComponents ref={this.componentRef } onClick = {this.clickHandler}/>
        <button ></button>
      </div>
    )
  }
}

export default FocusInput