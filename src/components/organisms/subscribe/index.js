import React from 'react'
import InputGroup from '../../molecules/input-group'
import Title from '../../molecules/title'
import './styles.scss'

export default function Subscribe() {
  return (
    <section className="subscribe" id="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-header">
          <Title
            title="Subscribe"
            textShadown="Subscribe"
            classFont="title"
            classFontColor="light"
          />
          <p className="subscribe-paragraph">
            Subscribe to our newsletter, to be always aware of our company
            events.We build the most powerful and flexible tools for internet
            commerce.
          </p>
        </div>
        <div className="subscribe-form">
          <form>
            <InputGroup idInput="email" placeholder="Type your email" />
          </form>
        </div>
      </div>
    </section>
  )
}
