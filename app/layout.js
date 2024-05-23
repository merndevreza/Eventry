import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import connectMongo from "@/services/connectMongo";
import AuthProvider from "./contextProvider/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description: "A single place to find all online events globally",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
