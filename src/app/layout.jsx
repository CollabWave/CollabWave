import {root} from "./globals.css";
import NavBar from "../../components/Navbar/navbar.jsx";
import { Cinzel, Saira, Inter } from "next/font/google";

export const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const saira = Saira({
  variable: "--font-saira",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${saira.variable} ${cinzel.variable}`}
    >
      {/* <body style={justBackgr}> */}
      {/* <body> */}
      <body className={`${styles.mainhome} ${styles.normalize}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
