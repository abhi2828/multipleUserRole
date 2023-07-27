import React from 'react'

export const Button = ({type,className}) => {
  return (
    <input className={`${className}`} type={type} />
  )
}

export const Label = ({name,label,className}) => {
    return (
      <label htmlFor={name} className={`${className}`} >{label}</label>
    )
  }