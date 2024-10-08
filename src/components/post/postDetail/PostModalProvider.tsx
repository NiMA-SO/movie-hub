import { ReactNode, useReducer } from "react";
import PostModalContext from "./PostModalContext";

export type ModalAction = number | null;

// اصلاح شده: _state به جای state
const tasksReducer = (_state: number | null, action: ModalAction): number | null => {
  return action;
};

interface Props {
  children: ReactNode;
}

const PostModalProvider: React.FC<Props> = ({ children }) => {
  const [toggle, dispatch] = useReducer(tasksReducer, null);
  return (
    <PostModalContext.Provider value={{ toggle, dispatch }}>
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalProvider;
