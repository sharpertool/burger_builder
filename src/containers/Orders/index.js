import React, {Component} from 'react'
import axios from '~/axios-orders'
import withErrorHandler from '~/hoc/withErrorHandler'

import Order from '~/components/Order'
import Spinner from '~/components/UI/Spinner'

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  }
  
  componentDidMount() {
    this.setState({loading: true})
    axios.get('/orders.json')
      .then(response => {
        console.log('Orders response:', response)
        const data = response.data
        const orders = Object.keys(data).map(k => {
          const order = data[k]
          return {...order, id:k}
        })
        console.log('I build orders:', orders)
        this.setState({
            orders: orders,
            loading: false
          }
        )
      })
  }
  
  render() {
    const {loading, orders} = this.state
    const orderdom = orders.map(order => {
      return <Order key={order.id} {...order} />
    })
    
    return (
      <div>
        {loading ? <Spinner/> : orderdom}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)
