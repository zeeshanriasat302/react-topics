import React from "react";

const FunctionBased = (props) =>  {
    console.log(props)
    
    const {name, heroname, children} = props
    return (
        <div>
        <h1> FunctionBased Hello {name} a.k.a {heroname}</h1>,
        {children}
        </div>
    )
}

export default FunctionBased