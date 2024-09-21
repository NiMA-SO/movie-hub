import {  ReactNode, useReducer } from "react";
// import tasksReducer from "./reducers/TasksReducer";
import GenreContext from "./GenreContext";


//start
//میتونه در یک فایل دیگه هم قرار بگیره
interface MOVIES{
  type: 'MOVIES';
}
interface SERIES{
  type: 'SERIES';   
}
interface NONE{
  type: 'NONE';   
}

export type TaskAction = MOVIES | SERIES | NONE;


const tasksReducer = (genreSelect: string , action: TaskAction): string => {
  switch(action.type){
      case 'MOVIES':
          return genreSelect = action.type
      case 'SERIES':
          return genreSelect = action.type
      case 'NONE':
          return genreSelect = action.type
  }
  return genreSelect;
}
// end


interface Props {
  children: ReactNode;
}

const GenreProvider = ({ children }: Props) => {
  const [genreSelect, dispatch] = useReducer(tasksReducer, '');
  return (
    <GenreContext.Provider value={{ genreSelect, dispatch }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
