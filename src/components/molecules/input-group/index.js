import React from 'react'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import { ReactComponent as SendIcon } from '../../../assets/svg/icon-send.svg'
import './styles.scss'

export default function InputGroup({ idInput, placeholder }) {
  return (
    <div className="input-group">
      <div className="input-group-row">
        <div className="input-group-icon">
          <SendIcon />
        </div>
        <Input idInput={idInput} placeholder={placeholder} />
      </div>
      <Button isButton typeButton="submit" color="colorful" name="Send" />
    </div>
  )
}
