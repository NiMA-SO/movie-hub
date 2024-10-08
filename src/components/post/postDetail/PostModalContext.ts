import React, { Dispatch } from "react";

interface ModalContextType {
  toggle: number | null;
  dispatch: Dispatch<number | null>;
}

const PostModalContext = React.createContext<ModalContextType>({} as ModalContextType);

export default PostModalContext;
