import React, { Dispatch } from "react";
import { ModalAction } from "./PostModalProvider";


interface ModalContextType{
    toggle: number | null;
    dispatch: Dispatch<number | null>
}

const PostModalContext = React.createContext<ModalContextType>({} as ModalContextType)

export default PostModalContext