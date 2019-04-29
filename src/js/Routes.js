import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewGame from './../components/newGame/NewGame'
import OptionsGame from './../components/optionGame/OptionsGame'

class Routes extends React.Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={ OptionsGame }/>
                    <Route exact path='/new-game' component={ NewGame }/>
                </Switch>
            </main>
        )
    }
}
export default Routes