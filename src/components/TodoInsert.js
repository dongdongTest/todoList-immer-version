import React, {useCallback, useState} from 'react';
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

  const [value , setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  },[]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(value);
    setValue('')
  },[value , onInsert]);

  return (
    <form className='TodoInsert' onSubmit={handleSubmit}>
      <input placeholder='할일 목록 입력' value={value} onChange={handleChange}/>
      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;