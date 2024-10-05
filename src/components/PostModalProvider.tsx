import {  ReactNode, useReducer } from "react";
// import tasksReducer from "./reducers/TasksReducer";
import PostModalContext from "./PostModalContext";



export type ModalAction = number | null;


const tasksReducer = (genreSelect: number | null , action: ModalAction): number | null => {
    return genreSelect = action
}
// end


interface Props {
  children: ReactNode;
}

const PostModalProvider = ({ children }: Props) => {
  const [toggle, dispatch] = useReducer(tasksReducer, null);
  return (
    <PostModalContext.Provider value={{ toggle, dispatch }}>
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalProvider;
