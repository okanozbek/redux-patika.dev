import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Error from '../Response/Error';
import Loading from '../Response/Loading';
import Item from './Item';

const List = ({ todos }) => {
  const [noCompletedTodo, setNoCompletedTodo] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState([]);
  const status = useSelector((state) => state.todos.activeFilter);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredStatus(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredStatus(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredStatus(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
    setNoCompletedTodo(todos.filter((todo) => todo.completed === false));
  }, [todos, status]);

  return (
    <>
      <ul className="todo__list-wrapper">
        {isLoading && <Loading />}
        {filteredStatus.map((todo, index) => (
          <li key={index}>
            <Item todo={todo} />
          </li>
        ))}
      </ul>
      {error && <Error message={error} />}
      <div className="no__todo-length">
        {noCompletedTodo.length > 0
          ? `${noCompletedTodo.length} tasks left to do`
          : 'Nothing left to do'}
      </div>
    </>
  );
};

export default List;
