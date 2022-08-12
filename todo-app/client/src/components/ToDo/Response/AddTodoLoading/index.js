import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const AddTodoLoading = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./../../../../lottie/add-todo-loading.json'),
    });
  }, []);
  return (
    <div
      className="add__todo-loading"
      style={{ margin: 'auto' }}
      ref={container}
    ></div>
  );
};

export default AddTodoLoading;
