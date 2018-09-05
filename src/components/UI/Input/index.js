import React from 'react'

import classes from './styles.css'

const input = (props) => {
  let inputElement = null
  const config = props.elementConfig
  let inputClasses = [classes.InputElement]
  
  if (props.touched && props.shouldValidate && !props.valid) {
    inputClasses.push(classes.Invalid)
  }
  const classString = inputClasses.join(' ')
  
  
  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={classString}
        {...config}
        value={props.value}
        onChange={props.changed}
      />
      break
    case 'email':
      inputElement = <input
        className={classString}
        {...config}
        value={props.value}
        onChange={props.changed}
      />
      break
    case 'textarea':
      inputElement = <textarea
        onChange={props.changed}
        className={classString}
        {...config}/>
      break
    case 'select':
      const options = config.options.map(opt => {
        return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
      })
      inputElement =
        <select name="" id="{props.key}" onChange={props.changed}>
          {options}
        </select>
      break
    default:
      inputElement = <input
        onChange={props.changed}
        className={classString}
        {...config}/>
  }
  
  return (
    <div data-key={props.mykey} className={classString}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  
  )
}

export default input
