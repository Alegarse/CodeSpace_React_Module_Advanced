export const LOAD_USERS = "LOAD_USERS"
export const SELECT_USER = "SELECT_USER"

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        payload: {
            users
        }
    }
}

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: {
            user
        }
    }
}