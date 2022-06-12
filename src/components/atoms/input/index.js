import React from 'react'
import './styles.scss'

export default function Input({ idInput, placeholder }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      name={idInput}
    />
  )
}
