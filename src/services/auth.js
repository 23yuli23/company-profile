import Backendless from './backendless'

export const login = (email, password) =>
  Backendless.UserService.login(email, password, true)

export const logout = () => Backendless.UserService.logout()

export const getCurrentUser = () => Backendless.UserService.getCurrentUser()

export const isLoggedIn = () => Backendless.UserService.isValidLogin()
