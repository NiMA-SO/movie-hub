import React, { Dispatch } from "react";
import { PostAction } from "./post/PostProvider";


interface TasksContextType{
    postType: string ;
    dispatch: Dispatch<PostAction>
}

const PostContext = React.createContext<TasksContextType>({} as TasksContextType)

export default PostContext