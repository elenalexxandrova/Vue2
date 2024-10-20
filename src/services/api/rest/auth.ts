import makeRequest from "../httpClient"
import type { LoginData } from "../../../types/auth"

export const login = (data: LoginData) =>
  makeRequest({
    url: "https://dev.moydomonline.ru/api/auth/login/",
    method: "POST",
    data
  })
