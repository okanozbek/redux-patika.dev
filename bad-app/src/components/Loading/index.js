import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../lottie/loading.json';

const Loading = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default Loading;
