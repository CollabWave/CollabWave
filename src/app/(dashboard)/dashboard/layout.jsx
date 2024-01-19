'use client';

import './globals.css';

import { Suspense, useState } from 'react';

import { Drawer, Layout } from 'antd';

import UiContext from './UiContext';

import Loading from './loading';
import { SideMenu } from '../layout/SideMenu/SideMenu';
import { DesktopHeader } from '../layout/Header/desktop/DesktopHeader';
import { MobileHeader } from '../layout/Header/mobile/MobileHeader';
import { MobileMenu } from '../layout/SideMenu/MobileMenu';
import { Footer } from '../layout/Footer/Footer';

import { Montserrat } from 'next/font/google';

import styles from '../layout/SideMenu/sideMenu.module.css';

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function DashboardLayout({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <UiContext>
          <Layout hasSider>
            <SideMenu />
            <Layout className={styles.mainPart}>
              <DesktopHeader />
              <MobileHeader isOpen={mobileMenuOpened} setIsOpen={setMobileMenuOpened} />
              <Drawer
                className={`${styles.siderS} mobile-menu`}
                width={300}
                placement="right"
                closable={false}
                onClose={() => setMobileMenuOpened(!mobileMenuOpened)}
                open={mobileMenuOpened}
              >
                <MobileMenu collapsed={mobileMenuOpened} setCollapsed={setMobileMenuOpened} />
              </Drawer>
              <Suspense fallback={<Loading />}>
                <main className="main">{children}</main>
              </Suspense>
              <Footer />
            </Layout>
          </Layout>
        </UiContext>
      </body>
    </html>
  );
}
