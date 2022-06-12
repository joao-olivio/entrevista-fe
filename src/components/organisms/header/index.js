import React, { useState } from 'react'
import NavbarMenu from '../../molecules/navbar-menu'
import LogoText from '../../molecules/logo-text'
import { ReactComponent as HumburgIcon } from '../../../assets/svg/icon-hamburg.svg'
import './styles.scss'

export default function Header() {
  const [isOpen, setIsopen] = useState(false)

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true)
  }

  return (
    <header className={`header ${isOpen === true ? 'active' : ''}`}>
      <div className="header-toggle">
        <button type="button" onClick={ToggleSidebar}>
          <HumburgIcon />
        </button>
      </div>

      <div className={`header-sidebar`} onClick={ToggleSidebar}>
        <button type="button" onClick={ToggleSidebar}>
          X
        </button>
        <LogoText
          isText
          text="The Podcast"
          classFont="text-header"
          classFontColor="light"
          classColorLogo="light"
        />
        <NavbarMenu />
      </div>

      <div className={`header-sidebar-overlay`} onClick={ToggleSidebar}></div>
    </header>
  )
}
