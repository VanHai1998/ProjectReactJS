import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type authResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
