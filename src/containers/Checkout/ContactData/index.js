import React, {Component} from 'react'

import axios from '~/axios-orders'

import Button from '~/components/UI/Button'
import Spinner from '~/components/UI/Spinner'
import Input from '~/components/UI/Input'

import classes from './styles.css'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street Address'
        },
        value: 'Saranac',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your City'
        },
        value: 'Boise',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      state: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your State'
        },
        value: 'Idaho',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: 'USA',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your ZipCode'
        },
        value: '83709',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: true,
        touched: false,
      },
      email: {
        elementType: 'email',
        elementConfig: {
          type: 'text',
          placeholder: 'Your E-Mail'
        },
        value: 'ed@sharpertool.com',
        validation: {
          required: true
        },
        valid: true,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
            {value: 'uber', displayValue: 'Uber Eats'},
          ],
        },
        value: 'uber',
        validation: {},
        valid: true,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false
  }
  
  orderHandler = (evt) => {
    evt.preventDefault()
    this.setState({loading: true})
    
    const orderData = Object.entries(this.state.orderForm)
      .reduce((order, entry) => {
        const [name, obj] = entry;
        order[name] = obj.value
        return order
      }, {})
    

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: orderData
    }
    
    axios.post('/orders.json', order)
      .then(response => new Promise(resolve => setTimeout(() => resolve(response), 1000)))
      .then(response => {
        console.log(`Response from post: ${JSON.stringify(response, null, 2)}`)
        console.log(`Added new order with id ${response.data.name}`)
        this.setState({loading: false})
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(`Error sending order ${JSON.stringify(error, null, 2)}`)
        this.setState({loading: false})
      })
  }
  
  checkValidity (value, rules) {
    let isValid = true

    if (rules.required) {
      isValid = isValid && value.trim() !== ''
    }
    
    if (rules.minLength) {
      isValid = isValid && value.trim().length >= rules.minLength
    }
    
    if (rules.maxLength) {
      isValid = isValid && value.trim().length <= rules.maxLength
    }
    
    return isValid
  }
  
  inputChangedHandler = (evt, key) => {
    const { target: { value } } = evt
    const orderForm = {...this.state.orderForm}
    const frm = orderForm[key]
    frm.value = value
    frm.valid = this.checkValidity(value, frm.validation)
    frm.touched = true;
    
    const formIsValid = Object.values(orderForm).reduce((valid, elem) => {
      return valid && elem.valid
    }, true)
    
    this.setState({orderForm: orderForm, formIsValid: formIsValid})
  }
  
  render() {
    const {loading, orderForm} = this.state
    const elements = Object.entries(orderForm)
      .map(entry => {
        const [key, elem] = entry
        const {validation,...config} = elem // Filter out unused values
        return (<Input
          changed={(event) => this.inputChangedHandler(event, key)}
          key={key}
          {...config}
          shouldValidate={validation}
          mykey={key}/>)
      })
    
    const form = (
      <form action="" onSubmit={this.orderHandler}>
        {elements}
        <Button disabled={!this.state.formIsValid} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    )
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {loading ? <Spinner/> : form}
      </div>
    )
  }
}

export default ContactData
