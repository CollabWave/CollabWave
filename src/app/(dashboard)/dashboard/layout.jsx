'use client';

import './globals.css';

import { Suspense } from 'react';

import { Layout } from 'antd';

import UiContext from './UiContext';

import Loading from './loading';
import { SideMenu } from '../layout/SideMenu/SideMenu';
import { DesktopHeader } from '../layout/Header/DesktopHeader';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UiContext>
          <Layout>
            <SideMenu />
            <Layout>
              <DesktopHeader />
              <Suspense fallback={<Loading />}>
                <main className='main'>{children}</main>
              </Suspense>
            </Layout>
          </Layout>
        </UiContext>
      </body>
    </html>
  );
}
