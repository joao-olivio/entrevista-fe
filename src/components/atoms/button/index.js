import React from 'react'
import './styles.scss'

export default function Button({ name, color, isButton, typeButton }) {
  return (
    <>
      {!isButton ? (
        <a
          href="https://www.valtech.com/pt-br/"
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
          className={`button ${color}`}
        >
          {name}
        </a>
      ) : (
        <button type={typeButton} className={`button ${color}`}>
          {name}
        </button>
      )}
    </>
  )
}
