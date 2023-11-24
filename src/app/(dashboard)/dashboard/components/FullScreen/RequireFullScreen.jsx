'use client';

import { useEffect, useState } from 'react';

import styles from './fullScreen.module.css';

export const RequireFullscreen = ({ component, children }) => {
  const [isFullscreen, setFullscreen] = useState(false);

  const handleFullScreen = () => {
    if (component?.current) {
      isFullscreen ? document.exitFullscreen() : component.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      setFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      document.removeEventListener('mozfullscreenchange', onFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      document.removeEventListener('msfullscreenchange', onFullScreenChange);
    };
  }, []);

  return (
    <div className={styles.outerWrap} onClick={handleFullScreen}>
      {children(isFullscreen)}
    </div>
  );
};
