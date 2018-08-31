import React, {Component} from 'react'

import Aux from '~/hoc/Aux'
import Burger from '~/components/Burger'
import BuildControls from '~/components/Burger/BuildControls'
import Modal from 'Components/UI/Modal'
import OrderSummary from 'Components/Burger/OrderSummary'
import Spinner from 'Components/UI/Spinner'
import withErrorHandler from '~/hoc/withErrorHandler'
import axios from '~/axios-orders'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.0,
  bacon: 1.5,
  meat: 2.0,
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 8.0,
    purchasable: true,
    purchasing: false,
    loading: false
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchasableState(updatedIngredients)
  }

  updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(k => { return ingredients[k]})
      .reduce((currsum, elem) => { return currsum + elem}, 0)
    this.setState({purchasable: sum !== 0})
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    //alert('You continue!')
    this.setState({loading: true})

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
        this.setState({loading: false, purchasing: false})
      })
      .catch(error => {
        console.log(`Error sending order ${JSON.stringify(error, null, 2)}`)
        this.setState({loading: false, purchasing: false})
      })
  }

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount > 0) {
      const updatedCount = oldCount - 1
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type] = updatedCount
      const price = INGREDIENT_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - price

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      })
      this.updatePurchasableState(updatedIngredients)
    }
  }

  render() {
    const {loading} = this.state;
    
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = <OrderSummary ingredients={this.state.ingredients}
                        cancelHandler={this.purchaseCancelHandler}
                        orderHandler={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>
    if (loading) {
      orderSummary = <Spinner/>
    }
    
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClose={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchase={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
