//Login
export const loginUser = (user) => {
    return { type: 'LOGIN_SAGA', payload: user }
}

//Logout
export const logoutUser = () => {
    return { type: 'LOGOUT_USER' }
}