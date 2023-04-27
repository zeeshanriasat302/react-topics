import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()

    }

    //focusing on input
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
            alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
      <input type="text" ref = {this.inputRef}/>
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs