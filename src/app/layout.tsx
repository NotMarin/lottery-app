import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { NavBar } from "@/src/components/organisms/nav-bar";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Chancerito | Gestión de Tickets de Lotería Online",
  description:
    "Gestiona tus tickets de lotería de forma rápida y segura. Registra números, edita jugadas, genera comprobantes en PDF, recibe sugerencias automáticas y organiza sorteos diarios de múltiples loterías en una sola plataforma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", "font-sans", poppins.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        <div className="flex flex-col p-6">{children}</div>
      </body>
    </html>
  );
}
