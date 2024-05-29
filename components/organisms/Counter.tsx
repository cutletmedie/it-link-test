'use client';

import {useState} from "react";
import ButtonText from "@/components/molecules/ButtonText";
import {ButtonType} from "@/components/atoms/Button";

const Counter = () => {
    const [index, setIndex] = useState(0);
    const increment = () => setIndex((prev) => prev + 1);
    const decrement = () => setIndex((prev) => prev - 1);

    return (
        <>
            <span>{index}</span>
            <ButtonText type={ButtonType.BUTTON} onClick={increment}>increment</ButtonText>
            <ButtonText type={ButtonType.BUTTON} onClick={decrement}>decrement</ButtonText>
        </>
    );
};

export default Counter;
