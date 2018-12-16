import axios from 'axios'
import data from '../../../.env'

export const services = {
  getImages: product => {
    const params = {
      key:data.key,
      cx:data.cx,
      searchType:'image',
      lr:'lang_pt',
      num:1,
      q: product
    }

    return axios.get('https://www.googleapis.com/customsearch/v1', {params})
    .then(resp => resp.data.items[0].link)
    .catch(err =>  err)
  }
}