import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranveer Deshmukh",
  description: "Personal portfolio website showcasing my experience, skills, projects, and achievements",
  icons: {
    icon: "/rd-favicon-dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
