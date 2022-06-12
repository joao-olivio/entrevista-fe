import React, { useState } from 'react'
import Card from '../card'
import Tab from '../../atoms/tab'
import { tabs as tabsMock } from '../../../mocks/tab'
import './styles.scss'

const Tabs = () => {
  const [ToggleState, setToggleState] = useState(0)
  const [tabs] = useState(tabsMock)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : ''

  return (
    <>
      <ul className="nav-tabs">
        {tabs.map((item, index) => {
          return (
            <li
              key={index}
              className={`tabs ${getActiveClass(index, 'active-tabs')}`}
              onClick={() => toggleTab(index)}
            >
              <Tab title={item.title} />
            </li>
          )
        })}
      </ul>
      <div className="nav-container">
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={`content ${getActiveClass(index, 'active-content')}`}
            >
              <div className="card-container">
                {item.content.card.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      title={card.title}
                      name={card.name}
                      jobTitle={card.jobTitle}
                      duration={card.duration}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Tabs
