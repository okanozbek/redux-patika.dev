import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Error = ({ message }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./../../../../lottie/error.json'),
    });
  }, []);
  return (
    <div className="error__message">
      <div ref={container}></div>
      {message}
    </div>
  );
};

export default Error;
