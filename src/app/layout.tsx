import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MouseReactiveBackground } from "@/components/MouseReactiveBackground";

export const metadata: Metadata = {
  title: "Summit SAT Math",
  description:
    "Modern SAT math practice for high schoolers with targeted question banks and smart filtering."
};

const siteFont = localFont({
  src: "../../public/media/site.woff2",
  variable: "--font-sans",
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={siteFont.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased font-sans">
        <MouseReactiveBackground />
        {children}
      </body>
    </html>
  );
}
