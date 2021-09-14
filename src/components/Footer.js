import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <p>App for tasks</p>
            <Link to="/about">about</Link>
        </footer>
    )
}

export default Footer
