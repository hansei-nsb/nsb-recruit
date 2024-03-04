import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "NSB",
  description: `Network Server Build, 교내 자율동아리로
    기능경기대회에 출전하기 위해 클라우드
    서비스의 핵심 이해와 클라우드 서비스,
    네트워크 구축 및 컴퓨터 시스템을 배워
    교내 대표로써 기능경기대회에 출전하는 걸
    궁극적인 목표로 삼고 공부하는 동아리입니다.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
