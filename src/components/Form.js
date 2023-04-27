import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    //   const handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
    
      this.state = {
         username : '',
         comments : '',
         topic: ''
      }
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
     handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
     }

     handleTopicChane = (event) => {
        this.setState({
            topic : event.target.value
        })
     }

     handlrSubmitForm = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
     }

  render() {
    return (
        <form onSubmit={this.handlrSubmitForm} >
        <br/>
            <div>
                <label>Username  </label>
                <input  type='text' 
                        value={this.state.username} 
                        onChange={this.handleOnChangeUsername} 
                />
            </div>
            <br/>

            <div>
                <label>Comments  </label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange} ></textarea>
            </div>
            <br/>

            <div>
                <label>Topics</label>
                <select value={this.state.topic} onChange={this.handleTopicChane}>
                    <option value = 'react' >React</option>
                    <option value = 'anguler' >Angular</option>
                    <option value = 'vue'>Vue</option>
                </select>
            </div>
            <br/>
            <button type='submit' >Submit</button>

        </form>
      
    )
  }
}

export default Form