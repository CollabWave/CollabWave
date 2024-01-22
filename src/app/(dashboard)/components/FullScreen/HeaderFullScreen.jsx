'use client';

import { useEffect, useRef } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { RequireFullscreen } from './RequireFullScreen';

import styles from './fullScreen.module.css';

export const HeaderFullscreen = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    rootRef.current = document.querySelector('body');
  }, []);

  return (
    <RequireFullscreen component={rootRef}>
      {isFullscreen => (
        <div>
          <Button
            type={isFullscreen ? 'ghost' : 'text'}
            icon={
              isFullscreen ? (
                <FullscreenExitOutlined className={styles.iconExit} style={{ fontSize: '200%' }} />
              ) : (
                <FullscreenOutlined className="icon__header" style={{ fontSize: '200%' }} />
              )
            }
          />
        </div>
      )}
    </RequireFullscreen>
  );
};
