// import React from "react";
// import style from './Navbar.module.scss'
// import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux';

// const Navbar = (props) => {
//     const items = props.navbar
//     debugger
//     return (
//         <nav className={style.navbar}>
//             <div className={style.item}>
//                 {items.map(item => {
//                     return (
//                         <div>
//                             <NavLink to={`/${item.name}`} activeClassName={style.active}>{item.name}</NavLink>
//                             <button>DELETE</button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </nav>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         navbar: state.navbarPage.navbar
//     }
// }

// export default connect(mapStateToProps)(Navbar)

import React, { useContext } from "react";
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logout = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
            <span href="/" className="brand-logo">Сокращение ссылок</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink to='/links'>Ссылки</NavLink></li>
                <li><a href='/create' onClick={logout}>Выйти</a></li>
            </ul>
            </div>
        </nav>
    )
}