import React from 'react'
import Logo from '../../atoms/logo'
import TextShadown from '../../atoms/text-shadown'
import './styles.scss'

export default function Title({
  title,
  textShadown,
  classTextShadown,
  classFont,
  classFontColor,
  isLogo,
}) {
  return (
    <div className="title-section">
      {isLogo ? <Logo classColorLogo="dark" /> : null}

      <p className={`text ${classFont} ${classFontColor}`}>{title}</p>
      <TextShadown text={textShadown} classTextShadown={classTextShadown} />
    </div>
  )
}
