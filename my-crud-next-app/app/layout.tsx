import Navbar from "./components/navbar";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        </body>
    </html>
  );
}
