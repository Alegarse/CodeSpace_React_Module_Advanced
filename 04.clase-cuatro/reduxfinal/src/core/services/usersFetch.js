

const users = [
    {
        id: 1,
        username: 'username1',
        password: '12345'
    },
    {
        id: 1,
        username: 'username2',
        password: '12345'
    },
]


export const getAllUsers = () => {
    return [...users]
}