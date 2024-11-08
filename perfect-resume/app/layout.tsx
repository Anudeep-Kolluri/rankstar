// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Job Description Page',
  description: 'Enter and submit job descriptions',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <aside className="sidebar">
            <Link href="/" className="icon">🏠</Link> {/* Home */}
            <Link href="/ranker" className="icon">📊</Link> {/* Ranker */}
            <Link href="/rephraser" className="icon">✍️</Link> {/* Rephraser */}
            <Link href="/editor" className="icon">📝</Link> {/* Editor */}
            <Link href="/upload" className="icon">📤</Link> {/* Upload */}
          </aside>
          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
