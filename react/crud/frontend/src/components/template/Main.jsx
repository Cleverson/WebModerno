import React, { Fragment } from 'react'

import './Main.css'
import Header from './Header'

const Main = props => {
    return (
        <Fragment>
            <Header {...props} />
            <main className="content">Conteúdo</main>
        </Fragment>
    )
}

export default Main
