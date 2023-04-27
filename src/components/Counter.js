import { Component } from "react";


class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }

    }
    increment() {

        this.setState({
            count: this.state.count +1
        }, ()=> {
            console.log(this.state.count)
        })
        // this.setState(prevState, props=> ({
        //     count: prevState.count + 1
        // }))
    }

    // incrementFive(){
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();

    // }
    render(){
    return(
        <div>
        <h1>count - {this.state.count}</h1>
        <button style={{backgroundColor: "lightblue"}} onClick = {()=> this.increment()}>Increment</button>
        </div>


    )
    } 
}

export default Counter