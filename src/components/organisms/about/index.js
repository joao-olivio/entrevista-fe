import React from 'react'
import Title from '../../molecules/title'
import Picture from '../../../assets/images/about/Picture.png'
import './styles.scss'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-row">
          <div className="about-column">
            <div className="about-text">
              <Title
                title="About the show"
                textShadown="About the"
                classTextShadown="lightGrey"
                classFont="title"
                classFontColor="light"
              />
              <p className="about-paragraph">
                So they stick around, kicking out feedback and I entertain it as
                if I need that I had a talk with my uncle and he agreed that my
                privacy about the only thing I need back as if I need that I had
                a talk with my uncle and he agreed that my privacy about the
                only thing.
              </p>
            </div>
          </div>
          <div className="about-column">
            <img src={Picture} alt="About the show" />
          </div>
        </div>
      </div>
    </section>
  )
}
