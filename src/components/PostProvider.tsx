import {  ReactNode, useReducer } from "react";
import PostContext from "./PostType";
// import tasksReducer from "./reducers/TasksReducer";


//start
//میتونه در یک فایل دیگه هم قرار بگیره
interface Week{
  type: 'week';
}
interface Day{
  type: 'day';   
}

export type PostAction = Week | Day;


const tasksReducer = (postType: string , action: PostAction): string => {
  switch(action.type){
      case 'week':
          return postType = action.type
      case 'day':
          return postType = action.type
  }
  return postType;
}
// end


interface Props {
  children: ReactNode;
}

const PostProvider = ({ children }: Props) => {
  const [postType, dispatch] = useReducer(tasksReducer, '');
  return (
    <PostContext.Provider value={{ postType, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
