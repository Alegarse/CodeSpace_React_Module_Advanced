import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router"

const users = [
  {
    id: 1,
    name: 'Circuit de Monaco',
    km: '3.337 km',
    pais: 'Mónaco'
  },
  {
    id: 2,
    name: 'Silverstone Circuit',
    km: '5.891 km',
    pais: 'Reino Unido'
  },
  {
    id: 3,
    name: 'Suzuka International Racing Course',
    km: '5.807 km',
    pais: 'Japón'
  },
  {
    id: 4,
    name: 'Circuit de Spa-Francorchamps',
    km: '7.004 km',
    pais: 'Bélgica'
  },
  {
    id: 5,
    name: 'Monza (Autodromo Nazionale)',
    km: '5.793 km',
    pais: 'Italia'
  },
  {
    id: 6,
    name: 'Marina Bay Street Circuit',
    km: '5.063 km',
    pais: 'Singapur'
  },
  {
    id: 7,
    name: 'Circuit of the Americas',
    km: '5.513 km',
    pais: 'Estados Unidos'
  },
  {
    id: 8,
    name: 'Interlagos (Autódromo José Carlos Pace)',
    km: '4.309 km',
    pais: 'Brasil'
  },
  {
    id: 9,
    name: 'Yas Marina Circuit',
    km: '5.281 km',
    pais: 'Emiratos Árabes Unidos'
  },
  {
    id: 10,
    name: 'Red Bull Ring',
    km: '4.318 km',
    pais: 'Austria'
  }
]

export const getUsers = () => {
    return [...users]
}

export const getUserById = (idUser) => {
    const user = users.find(u => u.id === Number(idUser))
    return user
}