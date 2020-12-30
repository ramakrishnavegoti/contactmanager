import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
function Header(props) {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                 <a href="/" className="navbar-brand">{branding}</a>
                 <div>
                     <ul className="nav navbar-nav mr-auto">
                         <li className="nav-item">
                             <Link to="/" className="nav-link">
                                <i className="fa fa-home"></i> Home
                             </Link>
                           </li>
                           <li className="nav-item">
                             <Link to="/contact/add" className="nav-link">
                                <i className="fa fa-plus"></i> Add Contact
                             </Link>
                             </li>
                             <li className="nav-item">
                             <Link to="/About" className="nav-link">
                                <i className="fa fa-question"></i> About
                             </Link>
                         </li>
                     </ul>
                 </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding:"My App"
}

Header.propTypes = {
    branding:PropTypes.string.isRequired
}
/*
const headerStyles = {
    color:'green',
    fontSize:'50px'
} */
export default Header;
