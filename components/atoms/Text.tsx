import {ReactNode} from "react";

type Props = {
    children?: ReactNode,
}


const Text = (props: Props) => {
    return <>{props.children}</>;
}

export default Text;
