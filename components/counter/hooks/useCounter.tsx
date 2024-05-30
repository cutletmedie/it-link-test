'use client'

import {useState} from "react";

const useCounter = () => {
    const [index, setIndex] = useState(0);
    const increment = () => setIndex((prev) => prev + 1);
    const decrement = () => setIndex((prev) => prev - 1);
    return { index, increment, decrement };
};

export default useCounter;
