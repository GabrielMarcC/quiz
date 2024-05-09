import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Context/Context";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "Questions about frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={rubik.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
