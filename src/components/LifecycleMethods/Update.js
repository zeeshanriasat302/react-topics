import React, { Component } from 'react'
import ChangeState from './ChangeState'

export class Update extends Component {
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

      changeState= () => {
        this.setState({
            name: 'Codevolution'
        })
      }
  
    render() {
      console.log('render')
      return (
        <div>
        <button onClick={this.changeState}>click here</button>
        <ChangeState />
        Update</div>
      )
    }
  }
  

export default Update