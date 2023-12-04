'use client';

import './globals.css';

import { Suspense } from 'react';

import { Layout } from 'antd';

import UiContext from './UiContext';

import Loading from './loading';
import { SideMenu } from '../layout/SideMenu/SideMenu';
import { DesktopHeader } from '../layout/Header/DesktopHeader';
import { Footer } from '../layout/Footer/Footer';

import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function DashboardLayout({ children }) {
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
            <Layout
              style={{
                marginLeft: 360,
              }}
            >
              <DesktopHeader />
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
