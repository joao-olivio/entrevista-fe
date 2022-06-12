import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './styles.scss'

export default function LinkAnchor({ adress, name, activeLink }) {
  return (
    <AnchorLink href={adress} className={`link ${activeLink}`}>
      {name}
    </AnchorLink>
  )
}
