import React, { Dispatch } from "react";
import { PostAction } from "./PostProvider";


interface TasksContextType{
    postType: string ;
    dispatch: Dispatch<PostAction>
}

const PostContext = React.createContext<TasksContextType>({} as TasksContextType)

export default PostContext