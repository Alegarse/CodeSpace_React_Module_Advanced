import { useEffect, useState } from "react"

const useTimer = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    const [auxPause, setAuxPause] = useState(false)

    useEffect(() => {
        if (!auxPause) {
            const intervalId = setInterval(() => {
                setCounter(counter + 1)
            }, 1000)

            return () => clearInterval(intervalId)
        }
    })

    const reset = () => {
        setCounter(0)
    }

    const pause = () => {
        setAuxPause(!auxPause)
    }

    return {
        counter,
        reset,
        pause,
        auxPause
    }

}

export default useTimer