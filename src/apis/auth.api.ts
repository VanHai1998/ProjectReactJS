import { authResponse } from 'src/types/auth.type'
import http from 'src/Utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<authResponse>('/register', body)

export const login = (body: { email: string; password: string }) => http.post<authResponse>('/login', body)

export const logout = () => http.post('/logout')
