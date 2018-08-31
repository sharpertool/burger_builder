import React from 'react'

import Modal from '~/components/UI/Modal'
import Aux from '~/hoc/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
  
  return class extends React.Component {
    state = {
      error: null
    }
    
    
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      this.resInterceptor = axios.interceptors.response.use(null, error => {
        console.log('Error occurred:', error)
        this.setState({error: error})
      })
    }
    
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
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
