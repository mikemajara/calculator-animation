import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
          <ul className="flex flex-row gap-2 p-4 mb-2 border-b border-b-black">
            <li className="hover:underline">
              <a href="/animations-css">Animations CSS</a>
            </li>
            <li className="hover:underline">
              <a href="/animations-framer">Animations framer</a>
            </li>
            <li className="hover:underline">
              <a href="/calculator">calculator</a>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
