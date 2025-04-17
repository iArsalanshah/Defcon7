
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Nav from './nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Defcon7 Tracker',
  description: 'Track top memecoin calls, leaderboards, and tutorials.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="p-4">
            <Nav />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="p-4 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Defcon7 Tracker. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
