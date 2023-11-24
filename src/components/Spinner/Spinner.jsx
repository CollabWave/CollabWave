import { useMemo } from 'react';

import { hexToHSL } from '@/utils/utils';

import styles from './spinner.module.css';

export const Spinner = ({ color }) => {
  const colors = useMemo(
    () =>
      new Array(6).fill(color).map((color, index) => {
        const { h, s, l } = hexToHSL(color);
        const newH = Math.min(360, h * 360 + 10 * index);
        const rounded = [newH, s * 100, l * 100].map(Math.round);

        return `hsl(${rounded[0]}, ${rounded[1]}%, ${rounded[2]}%)`;
      }),
    [color]
  );

  return (
    <svg className={styles.spinner} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle
        className={`${styles.pl__ring1} ${styles.circle}`}
        cx="64"
        cy="64"
        r="60"
        fill="none"
        stroke={colors[0]}
        strokeWidth="8"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="377 377"
        strokeDashoffset="-376.4"
      />
      <circle
        className={`${styles.pl__ring2} ${styles.circle}`}
        cx="64"
        cy="64"
        r="52.5"
        fill="none"
        stroke={colors[1]}
        strokeWidth="7"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="329.9 329.9"
        strokeDashoffset="-329.3"
      />
      <circle
        className={`${styles.pl__ring3} ${styles.circle}`}
        cx="64"
        cy="64"
        r="46"
        fill="none"
        stroke={colors[2]}
        strokeWidth="6"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="289 289"
        strokeDashoffset="-288.6"
      />
      <circle
        className={`${styles.pl__ring4} ${styles.circle}`}
        cx="64"
        cy="64"
        r="40.5"
        fill="none"
        stroke={colors[3]}
        strokeWidth="5"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="254.5 254.5"
        strokeDashoffset="-254"
      />
      <circle
        className={`${styles.pl__ring5} ${styles.circle}`}
        cx="64"
        cy="64"
        r="36"
        fill="none"
        stroke={colors[4]}
        strokeWidth="4"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="226.2 226.2"
        strokeDashoffset="-225.8"
      />
      <circle
        className={`${styles.pl__ring6} ${styles.circle}`}
        cx="64"
        cy="64"
        r="32.5"
        fill="none"
        stroke={colors[5]}
        strokeWidth="3"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        strokeDasharray="204.2 204.2"
        strokeDashoffset="-203.9"
      />
    </svg>
  );
};
