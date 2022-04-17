import { axios } from '@bundled-es-modules/axios'

export default axios.create({
  baseURL: 'http://localhost:4000/'
})
