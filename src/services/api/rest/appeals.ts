import makeRequest from '../httpClient'

export const fetchAppeals = (params: object) =>
   makeRequest({
      url: 'https://dev.moydomonline.ru/api/appeals/v1.0/appeals/',
      method: 'GET',
      params,
   })

export const fetchFromSearchAppeals = ( search: string) =>
   makeRequest({
      url: `https://dev.moydomonline.ru/api/appeals/v1.0/appeals/?search=${search}`,
      method: 'GET',
   })

export const fetchUserPremises = () => 
   makeRequest({
      url: 'https://dev.moydomonline.ru/api/geo/v2.0/user-premises/',
      method: 'GET',
   })

export const fetchByPremiseIdAppeals = (params, premise_id: string) =>
   makeRequest({
      url: `https://dev.moydomonline.ru/api/appeals/v1.0/appeals/?premise_id=${premise_id}`,
      method: 'GET',
      params
   })
