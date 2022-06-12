import React from 'react'
import { ReactComponent as PlayIcon } from '../../../assets/svg/icon-play.svg'
import { ReactComponent as ClockIcon } from '../../../assets/svg/icon-clock.svg'
import './styles.scss'

export default function Card({ title, name, jobTitle, duration }) {
  return (
    <div className="card">
      <div className="card-box">
        <div className="card-inner">
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-name">{name}</p>
            <p className="card-jobTitle"> {jobTitle}</p>
          </div>
          <div className="card-footer">
            <button type="button" aria-label={title}>
              <PlayIcon />
            </button>
            <div className="card-time">
              <ClockIcon />
              <p className="card-duration"> {duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
