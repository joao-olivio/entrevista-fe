import React from 'react'
import Button from '../../atoms/button'
import Title from '../../molecules/title'
import Tabs from '../../molecules/tabs'
import './styles.scss'

export default function Episodes() {
  return (
    <section className="episodes" id="episodes">
      <div className="episodes-container">
        <div className="episodes-title">
          <h2>
            <Title
              title="Last Episodes"
              textShadown="Last Episodes"
              classTextShadown="lightGrey"
              classFont="title"
            />
          </h2>
        </div>
        <Tabs />
      </div>
      <div className="episodes-button">
        <Button color="light" name="view more" />
      </div>
    </section>
  )
}
