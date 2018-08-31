import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilder-491e1.firebaseio.com/'
})

export default instance


