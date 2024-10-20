import axios from 'axios'
import { ResponseType } from 'axios'

export interface Request {
   url: string
   method?: string
   responseType?: ResponseType
   headers?: any
   params?: any
   data?: any
   paramsSerializer?: (params: object | string) => string
}

const makeRequest = ({
   url = '/',
   method = 'get',
   headers,
   params,
   data,
   responseType = 'json',
   paramsSerializer,
}: Request) =>
   axios({
      url,
      method,
      responseType,
      headers,
      params,
      data,
      paramsSerializer,
   })

export default makeRequest
