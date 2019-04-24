import React from 'react'
import "./Slider.css"

class Slider extends React.Component {

    handleClick(event){
        event.preventDefault()
        this.props.click()
    }

    changedColor(bool){
        return bool ? 'on' : 'off'
    }
      
    render() {
        return (
            <div className="container-toggle">
                <div className={`bar-toggle bar-toggle-${this.changedColor(this.props.power)}`}> 
                    <div className={`toggle ${this.changedColor(this.props.power)}`} onClick={this.handleClick.bind(this)}></div>
                </div>
            </div>
        )
    }
}
export default Slider