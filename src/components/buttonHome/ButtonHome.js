import React from 'react'
//import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class ButtonHome extends React.Component {

    render() {
        return (
            <div className="buttonBack">
                <FontAwesomeIcon icon="stroopwafel" />
            </div>
        )
    }
}
export default ButtonHome