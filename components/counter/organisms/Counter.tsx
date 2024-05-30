'use client'

import {ReactNode} from "react";
import useCounter from "@/components/counter/hooks/useCounter";
import ButtonText from "@/components/counter/molecules/ButtonText";
import {ButtonType} from "@/components/counter/atoms/Button";
import Text from "@/components/counter/atoms/Text";

type Props = {
    content?: (index: number, incrementHandler: () => void, decrementHandler: () => void) => ReactNode;
}

export const Counter = ({content} : Props) => {
    const { index, increment, decrement } = useCounter();

    if (content) {
        return <>{content(index, increment, decrement)}</>;
    }

    return (
        <>
            <Text>{index}</Text>
            <ButtonText type={ButtonType.BUTTON} onClick={increment}>increment</ButtonText>
            <ButtonText type={ButtonType.BUTTON} onClick={decrement}>decrement</ButtonText>
        </>
    );
};
