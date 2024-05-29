import Button, {ButtonType} from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import {ReactNode} from "react";

type Props = {
    type: ButtonType,
    onClick: Function,
    children?: ReactNode,
    className?: string,
    disabled?: boolean,
}

const ButtonText = (props: Props) => {
    const {type, onClick, children, className, disabled} = props;
    return (
        <Button type={type} onClick={onClick} className={className} disabled={disabled}>
            <Text>{children}</Text>
        </Button>
    )
}

export default ButtonText;
