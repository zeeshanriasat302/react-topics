import React, {Component} from "react";

class ClassBased extends Component {
    render() {
        const {name, heroname, children} = this.props

        return (
            <div>
            <h1>ClassBased, Hello {name} a.k.a {heroname}</h1>,
            {children}
            </div>
        )
    }
}

export default ClassBased