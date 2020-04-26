import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import './TodoList.scss';
import cn from 'classnames';

const TodoList = ({ todos , onDelete , onToggle }) => {

  const todoList = todos.map((todo,index) => {
      const {checked, text} = todo;
      return (
      <div className='TodoList' key={index}>
        <div className={cn('checkbox', {checked})} onClick={() => onToggle(index)}>
          {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => onDelete(index)}>
          <MdRemoveCircleOutline/>
        </div>
      </div>
      )});

  return (
    <>
      {todoList}
    </>
  );
};

export default TodoList;