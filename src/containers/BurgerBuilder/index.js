import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger'
import BurgerIngredient from "../../components/Burger/BurgerIngredient";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render() {
    return (
      <Aux>
        <div>Burger</div>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder