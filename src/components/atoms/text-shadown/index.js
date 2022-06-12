import React from 'react'
import './styles.scss'

export default function TextShadown({ text, classTextShadown }) {
  return <p className={`text-shadown ${classTextShadown}`}>{text}</p>
}
