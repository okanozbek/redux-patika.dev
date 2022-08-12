import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../redux/counter/counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log('counter', countValue);
  return (
    <div>
      <h1>{countValue}</h1>
      <br />
      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button
        type="button"
        onClick={() => (countValue !== 0 ? dispatch(decrement()) : 0)}
      >
        increment
      </button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        min={0}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="button" onClick={() => dispatch(incrementByAmount(amount))}>
        increment by amount
      </button>
    </div>
  );
};

export default Counter;
