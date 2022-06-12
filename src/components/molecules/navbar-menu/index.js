import React, { useState } from 'react'
import LinkAnchor from '../../atoms/link-anchor'
import { menus as menusMock } from '../../../mocks/menu'
import './styles.scss'

const NavbarMenu = () => {
  const [menus, setMenus] = useState(menusMock)

  const anchorClick = (name) => {
    setMenus(
      menus.map((x) => {
        return {
          ...x,
          isActiveLink: x.name === name || false,
        }
      })
    )
  }

  return (
    <ul className="navbar">
      {menus.map((item, index) => {
        return (
          <li key={index} className="navbar-item">
            <LinkAnchor
              adress={item.address}
              name={item.name}
              onClick={() => {
                anchorClick(item.name)
              }}
              activeLink={item.isActiveLink}
            >
              {item.name}
            </LinkAnchor>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarMenu
