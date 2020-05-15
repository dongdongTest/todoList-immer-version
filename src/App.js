import React, {useCallback, useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import produce from "immer";

const App = () => {

  const [todos , setTodos] = useState([
    {
      text : 'react',
      checked  : true,
    },
    {
      text : 'JS',
      checked  : true,
    },
    {
      text : 'Python',
      checked  : false,
    },
  ]);

  const handleInsert = useCallback((text) => {
    const todo = {
      text : text ,
      checked : false
    };
    setTodos(produce(todos , draft => {
      draft.push(todo)
    }));
  },[todos]);

  const handleDelete = useCallback((idx) => {
    setTodos(produce(todos , draft => {
      draft.splice(idx,1)
    }));
  },[todos]);

  const handleToggle = useCallback((idx) => {
    setTodos(produce(todos , draft => {
      draft[idx].checked = !draft[idx].checked;
    }))},[todos]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;