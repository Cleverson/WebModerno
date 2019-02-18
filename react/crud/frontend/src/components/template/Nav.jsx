import React from 'react'
import './Nav.css'

const Nav = props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Refotorar em casa */}
                <a href="#/">
                    <i className="fa fa-home" />Início
                </a>
                <a href="#/users">
                    <i className="fa fa-users" />
                    Usuário
                </a>
            </nav>
        </aside>
    )
}

export default Nav
