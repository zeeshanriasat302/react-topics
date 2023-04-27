import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Zeeshan"
      }
      console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle componentDidMount')
    }

  render() {
    console.log('render')
    return (
      <div>Mounting</div>
    )
  }
}

export default Mounting