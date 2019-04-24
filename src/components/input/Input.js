import React from 'react'
import './Input.css'

class Input extends React.Component {
    render(){
        return (
            <div className="input__container col-6">
                <label className="field__label">
                    <input className="field__input" placeholder=" "></input>
                    <span className="field__label__span"> {this.props.label} </span>
                </label>
            </div>
        )
    }
}
export default Input