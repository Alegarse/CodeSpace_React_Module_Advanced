const users = [
    {
        id: 1,
        username: 'username1',
        password: '12345',
        mobile: 1
    },
    {
        id: 2,
        username: 'username2',
        password: '12345',
        mobile: 1
    },
    {
        id: 3,
        username: 'username3',
        password: '12345',
        mobile: 1
    },
    {
        id: 4,
        username: 'username4',
        password: '12345',
        mobile: 2
    },
    {
        id: 5,
        username: 'username5',
        password: '12345',
        mobile: 2
    },
    {
        id: 5,
        username: 'username5',
        password: '12345',
    },
]


export const getAllUsers = () => {
    return [...users]
}