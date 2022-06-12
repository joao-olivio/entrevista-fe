import React from 'react'
import NavbarMenu from '../../molecules/navbar-menu'
import LogoText from '../../molecules/logo-text'
import './styles.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <LogoText
        text="The Podcast"
        classFont="text-header"
        classFontColor="light"
        classColorLogo="light"
      />
      <NavbarMenu />
      <p className="copyright">2020 Valtech All rights reserved</p>
    </footer>
  )
}
