import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "Hello"
      }

      this.bindingMessage = this.bindingMessage.bind(this)
      
    }

    // bindingMessage(){
    //     this.setState({
    //         message: "Goodbye!  "
    //     })
    // }

    //binding as class property arrow function
    bindingMessage = () => {
        this.setState({
            message: "goodbye!"
        })
    }
  render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
     { 
        // first two approaches have performance implications
        // third and forth is recommended ones
        /********** First apporach binding in render using bind method */
        //<button onClick={this.bindingMessage.bind(this)}> Click </button>

        /********** second apporach  binding in render using arrow function */
        // <button onClick={() => this.bindingMessage()}> Click </button>

        /********** third apporach bind binding in constructor*/
        <button onClick = {this.bindingMessage}>Click</button>

        /********** forth apporach binding as class property arrow function*/




    }     
     </div>
    )
  }
}

export default EventBind