import React, { Component } from 'react'

export class ChangeState extends Component {
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

      shouldComponentUpdate(){
        console.log('ShouldComponentUpdateMethod')
        return null
      }
      
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapShotBeforeUpdate")
      }

      componentDidUpdate(){
        console.log('componentDidUpdate')
      }
  
    render() {
      console.log('render')
      return (
        <div>ChangeState</div>
      )
    }
  }
  

export default ChangeState