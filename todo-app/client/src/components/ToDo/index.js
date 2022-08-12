import React, { useEffect } from 'react';
import List from './List';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from 'redux/todos/todosSlice';
import { getTodoAsync } from '../../redux/services/services-todo';

const ToDo = () => {
  const items = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <div className="todo__wrapper">
      <h1>To Do App</h1>
      <Form todos={items} />
      <List todos={items} />
    </div>
  );
};

export default ToDo;
