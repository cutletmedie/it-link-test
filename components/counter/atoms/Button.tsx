import {ReactNode} from "react";

export const enum ButtonType {
    BUTTON = 'button',
    RESET = 'reset',
    SUBMIT = 'submit',
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

type Props = {
    type: ButtonType,
    onClick: Function,
    children?: ReactNode,
    className?: string,
    disabled?: boolean,
}

const Button = (props: Props) => {
    const {type, onClick, children, className, disabled} = props;
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    )
}

export default Button;
