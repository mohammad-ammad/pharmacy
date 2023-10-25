import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy",
  description: "Pharmacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
