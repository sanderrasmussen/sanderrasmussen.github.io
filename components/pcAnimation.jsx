import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function pcAnimation() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/pcAnimation2.json'
    });
  }, []);

  return (
    <div ref={animationContainer} className='h-1/2 w-1/2'></div>
  );
}