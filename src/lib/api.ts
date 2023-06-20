import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://inquisitive-flan-4cc38d.netlify.app/',
})
