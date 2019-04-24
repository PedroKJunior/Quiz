import React from 'react'
import "./Button.css"

class Button extends React.Component {
    render() {
        return (
            <div className={`button ${this.props.color}`}> { this.props.type } </div>
        )  
    }
}
export default Button