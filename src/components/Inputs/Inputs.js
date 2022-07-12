import React from 'react'
import './Inputs.css'

function Inputs({size='extraLarge',...rest}) {
  return (
    <input className={`inputs ${size}`} placeholder='enter text...' />
  )
}

export default Inputs