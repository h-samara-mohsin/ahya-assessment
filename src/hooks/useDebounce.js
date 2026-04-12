import { useEffect, useState } from "react"


export default function useDebounce(value, delay=400){
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        // set timer to update debounced value after delay
        const timer = setTimeout(() => {
            setDebounceValue(value)
        },delay)

        // cleanup - if value changes before delay , cancel previous timer
        return () => clearTimeout(timer)
    },[value,delay])

    return debounceValue
}