import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.180.44.238:3333',
})
