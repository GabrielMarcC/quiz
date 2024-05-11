import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Context/ThemeContext";
import { Header } from "@/components/Header";
import { QuizContextProvider } from "@/Context/QuizContext";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "Questions about frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${rubik.className} bg-ellipse dark:bg-ellipseDark bg-no-repeat bg-white_blue dark:bg-dark_blue overflow-x-hidden`}
        >
          <Header />
          <QuizContextProvider>{children}</QuizContextProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
