import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eurocraties',
  description: "Comprendre et explorer la politique des pays d'Europe",
  themeColor: '#000',
  other: {
    'msapplication-TileColor': '#000',
    'msapplication-TileImage': '/apple-icon/xlarge',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}