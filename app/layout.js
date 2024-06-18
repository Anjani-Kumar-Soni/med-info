import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobigency",
  description: "Accidental Help to patients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
