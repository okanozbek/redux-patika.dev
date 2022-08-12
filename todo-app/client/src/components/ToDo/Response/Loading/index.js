import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Loading = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./../../../../lottie/loading.json'),
    });
  }, []);
  return (
    <div className="loading" style={{ margin: 'auto' }} ref={container}></div>
  );
};

export default Loading;
