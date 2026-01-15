
import "./globals.css";
import type { ReactNode } from "react";
import { FavoritesProvider } from "@/lib/context/FavoritesContext";
import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Product Explorer",
  description: "Next.js Product Explorer Dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-500 text-gray-900">
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
