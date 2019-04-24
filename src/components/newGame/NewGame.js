import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'

class NewGame extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Novo Jogo</h1>
                    <Input label="Time 1" />
                    <Input label="Time 2" />
                    <Button type="Jogar" color="white"/>
                </div>
            </div>
        )
    }
}
export default NewGame