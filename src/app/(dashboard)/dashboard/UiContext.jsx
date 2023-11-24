'use client';

import { ThemeProvider } from 'next-themes';

export default function UiContext({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      themes={['light', 'dark']}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
