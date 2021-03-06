import React from 'react'
import { BrowserRouter as Link } from "react-router-dom"
import Button from "../button/Button"

class OptionsGame extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-6 buttons">
                    <Link to="/new-game">
                        <Button type="Novo Jogo" color="blue" />
                    </Link>
                    <Button type="Continuar Jogando" color="orange" />
                    <Button type="Gerenciar Perguntas" color="green" /> 
                </div>                            
            </div>
        )
    }
}
export default OptionsGame