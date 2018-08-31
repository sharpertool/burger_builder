import React from 'react'

import Modal from '~/components/UI/Modal'
import Aux from '~/hoc/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
  
  return class extends React.Component {
    state = {
      error: null
    }
    
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      axios.interceptors.response.use(null, error => {
        console.log('Error occurred:', error)
        this.setState({error: error})
      })
    }
    
    errorConfirmedHandler = () => {
      this.setState({error: null})
    }
    
    render() {
      const {error} = this.state
      
      return (
        <Aux>
          <Modal show={error}
            modalClose={this.errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </Aux>
      )
    }
  }
}

export default withErrorHandler
