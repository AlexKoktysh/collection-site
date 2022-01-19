import React from "react";
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = (props) => {
    const items = props.navbar
    debugger
    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                {items.map(item => {
                    return (
                        <div>
                            <NavLink to={`/${item.name}`} activeClassName={style.active}>{item.name}</NavLink>
                            <button>DELETE</button>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        navbar: state.navbarPage.navbar
    }
}

export default connect(mapStateToProps)(Navbar)