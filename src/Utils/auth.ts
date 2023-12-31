import { User } from 'src/types/user.type'

export const localStorageEventTarget = new EventTarget()
export const setAccessTokenFromLS = (accsess_token: string) => {
  localStorage.setItem('accsess_token', accsess_token)
}

export const clearLS = () => {
  localStorage.removeItem('accsess_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLS')
  localStorageEventTarget.dispatchEvent(clearLSEvent)
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
