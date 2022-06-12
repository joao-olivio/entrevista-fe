import React from 'react'
import Button from '../../atoms/button'
import Title from '../../molecules/title'
import { ReactComponent as IconMouse } from '../../../assets/svg/icon-mouse.svg'
import { ReactComponent as IconArrow } from '../../../assets/svg/icon-arrow.svg'
import './styles.scss'

export default function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <h1>
          <Title
            isLogo
            title="The Podcast"
            textShadown="Podcast"
            classTextShadown="lightGrey"
            classFont="subtitle"
            classFontColor="dark"
          />
        </h1>
        <Button color="dark" name="Listen Now" />
      </div>
      <button type="button" className="banner-mouse">
        <IconMouse />
        <IconArrow />
      </button>
    </section>
  )
}
