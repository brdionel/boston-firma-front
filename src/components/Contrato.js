import React from 'react'
import './Contrato.css'

export default function Contrato({contrato}) {

  return (
    <div className="container_wrapper">
      <div className="contrato__wrapper" dangerouslySetInnerHTML={{__html: contrato}} />
    </div>
  )
}
