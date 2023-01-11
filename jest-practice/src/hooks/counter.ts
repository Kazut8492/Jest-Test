import React, {useState} from 'react';

export type returnType = {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCounter =  (): returnType => {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1);

    return {
        count: counter,
        increment,
        decrement
    }
}