

const moviles = [
    {
        id: 1,
        brand: 'Apple',
        model: '11',
        year: '1990'
    },
    {
        id: 2,
        brand: 'Sansumg',
        model: 'modelo nuevo',
        year: '1995'
    },
]


export const getAllMoviles = () => {
    return [...moviles]
}