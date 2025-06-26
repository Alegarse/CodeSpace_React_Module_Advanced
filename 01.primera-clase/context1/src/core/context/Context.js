import { createContext } from "react";

const context = createContext({
    appName: 'Nombre de mi aplicación',
    theme: 'dark'
})

export default context