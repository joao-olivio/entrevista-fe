import React from 'react'
import { ReactComponent as LogoValtechLight } from '../../../assets/svg/logo-light.svg'
import { ReactComponent as LogoValtechDark } from '../../../assets/svg/logo-dark.svg'
import './styles.scss'

export default function Logo({ classColorLogo }) {
  return (
    <div className="logo">
      <div className={`logo-imagem ${classColorLogo}`}>
        {classColorLogo === 'dark' ? <LogoValtechDark /> : <LogoValtechLight />}
      </div>
    </div>
  )
}
