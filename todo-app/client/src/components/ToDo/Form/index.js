import { useState } from 'react';
import FilterTodo from './FilterTodo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync } from '../../../redux/services/services-todo';
import AddTodoLoading from '../Response/AddTodoLoading';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const addTodoLoading = useSelector(
    (state) => state.todos.addNewTodo.isLoading
  );

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      await dispatch(addTodoAsync({ title }));
      setTitle('');
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="todo__input-wrapper">
          <input
            disabled={addTodoLoading}
            type="text"
            onChange={onChangeInput}
            className="todo__input"
            value={title}
            name="todo"
            placeholder="To Do"
          />
          <div className="todo__input-buttons">
            {addTodoLoading && <AddTodoLoading />}
            <button type="submit">Add</button>
            <FilterTodo />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
