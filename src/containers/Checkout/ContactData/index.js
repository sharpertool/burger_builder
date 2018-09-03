import React, {Component} from 'react'

import axios from '~/axios-orders'

import Button from '~/components/UI/Button'
import Spinner from '~/components/UI/Spinner'

import classes from './styles.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalcode: ''
    },
    loading: false
  }
  
  orderHandler = (evt) => {
    evt.preventDefault()
    this.setState({loading: true})

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max Shell',
        address: {
          street: '100 Blah Road',
          city: 'Boise',
          state: 'ID',
          zip: '83100'
        },
        email: 'blah@test.com'
      },
      deliveryMethod: 'Uber Eats'
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
  
  render() {
    const {loading} = this.state
    const form = (
        <form action="">
          <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
          <input className={classes.Input} type="email" name="email" placeholder="Your Email address"/>
          <input className={classes.Input} type="text" name="street" placeholder="Your Street address"/>
          <input className={classes.Input} type="text" name="postal" placeholder="Your Postal code"/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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
