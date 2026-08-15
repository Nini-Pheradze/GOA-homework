import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Game Hub',
  description: 'Your ultimate video game catalog and guides',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
        {/* Header & Navigation */}
        <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-extrabold text-indigo-400 hover:text-indigo-300">
              🎮 GameHub
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-indigo-400 transition-colors">
                Home
              </Link>
              <Link href="/genres/action" className="hover:text-indigo-400 transition-colors">
                Genres
              </Link>
              <Link href="/guides" className="hover:text-indigo-400 transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-6xl w-full mx-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Game Hub. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
