import { ReactElement } from "react"

import logo from './img/logo.png'

import './header.css'

export const Header = (): ReactElement =>
    <header><img src={logo} alt="Logo" className='logo' /></header>

export default Header