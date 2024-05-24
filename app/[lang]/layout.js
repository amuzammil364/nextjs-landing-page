import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js landing page, Lead developer challenge",
  description: "Lead developer challenge",
};

export default function RootLayout({ children, params }) {
  
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
      
    </html>
  );
}
