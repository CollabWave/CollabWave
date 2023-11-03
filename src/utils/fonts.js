import { Cinzel, Saira, Inter, Roboto } from 'next/font/google';

export const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const saira = Saira({
  variable: '--font-saira',
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export const inter = Inter({
  variable: '--font-inter',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});
