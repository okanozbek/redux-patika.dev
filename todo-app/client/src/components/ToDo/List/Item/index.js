import { useDispatch } from 'react-redux';
import {
  toggleTodoAsync,
  removeTodoAsync,
} from '../../../../redux/services/services-todo';

const Item = ({ todo }) => {
  const dispatch = useDispatch();

  const handleOnChange = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  const handleRemoveOnClick = () => {
    if (window.confirm('Are you sure ?')) {
      dispatch(removeTodoAsync(todo.id));
    }
  };

  return (
    <>
      <label
        htmlFor={`todo-${todo.id}`}
        className={`todo__item-container ${todo.completed ? 'completed' : ''}`}
      >
        <div>
          <input
            type="checkbox"
            name="status"
            id={`todo-${todo.id}`}
            className={`${todo.completed ? 'completed' : ''}`}
            onChange={() => handleOnChange(todo.id, !todo.completed)}
            checked={todo.completed}
          />
          <span className={`${todo.completed ? 'completed' : ''}`}>
            {todo.title}
          </span>
        </div>
        <button className="trash__button" onClick={handleRemoveOnClick}>
          <img
            src="/assets/icons/times-icon.svg"
            width={20}
            height={20}
            alt="remove-todo"
          />
        </button>
      </label>
    </>
  );
};

export default Item;
