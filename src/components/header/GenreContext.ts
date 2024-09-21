import React, { Dispatch } from "react";
import { TaskAction } from "./GenreProvider";


interface TasksContextType{
    genreSelect: string ;
    dispatch: Dispatch<TaskAction>
}

const GenreContext = React.createContext<TasksContextType>({} as TasksContextType)

export default GenreContext