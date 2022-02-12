import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h3>Logo</h3>
                    <ul className="nav-links">
                        <Link to="/about">
                        <li >About</li>
                        </Link>
                        <Link to="/shop">
                        <li >Shop</li>
                        </Link>
                       
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
