import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import { DarkLightSwitch } from '../DarkLightSwitch/DarkLightSwitch';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';

import styles from './settings.module.css';
import { montserrat } from '@/utils/fonts';

export const SettingsWindow = () => {
  const { resolvedTheme } = useTheme();

  const headerLanguage = () => (
    <span
      className={
        resolvedTheme === 'dark'
          ? `${styles.header} ${montserrat.className}`
          : `${styles.headerLight} ${montserrat.className}`
      }
    >
      Change language
    </span>
  );
  const headerTheme = () => (
    <span
      className={
        resolvedTheme === 'dark'
          ? `${styles.header} ${montserrat.className}`
          : `${styles.headerLight} ${montserrat.className}`
      }
    >
      Change theme
    </span>
  );
  return (
    <div className={styles.window}>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <RightOutlined
            rotate={isActive ? 90 : 0}
            style={
              resolvedTheme === 'dark'
                ? { fontSize: '18px', color: 'rgb(51, 156, 253)' }
                : { fontSize: '18px', color: 'rgb(0, 114, 221)' }
            }
          />
        )}
        expandIconPosition="end"
      >
        <Collapse.Panel header={headerLanguage()}>
          <LanguagePicker />
        </Collapse.Panel>
        <Collapse.Panel header={headerTheme()}>
          <DarkLightSwitch />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};
