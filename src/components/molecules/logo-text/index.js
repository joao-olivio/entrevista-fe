import React from 'react'
import Logo from '../../atoms/logo'
import './styles.scss'

export default function LogoText({
  isText,
  text,
  classFont,
  classColorLogo,
  classFontColor,
}) {
  return (
    <div className="logo-text">
      <Logo classColorLogo={classColorLogo} />
      {isText ? (
        <p className={`text ${classFont} ${classFontColor}`}>{text}</p>
      ) : null}
    </div>
  )
}
