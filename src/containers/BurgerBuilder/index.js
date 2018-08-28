import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger'
import BurgerIngredient from "../../components/Burger/BurgerIngredient";
import BuildControls from '../../components/Burger/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.0,
  bacon: 1.5,
  meat: 2.0,
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0.0,
    purchasable: false,
    purchasing: false
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
    alert('You continue!')
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
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClose={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients}
                        cancelHandler={this.purchaseCancelHandler}
                        orderHandler={this.purchaseContinueHandler}
          />
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

export default BurgerBuilder