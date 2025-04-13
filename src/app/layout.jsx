'use client';

import './globals.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isKamokamo = pathname === '/kamokamo'; // ← /kamokamo だけheaderなし

  return (
    <html lang="ja">
      <body
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          padding: isKamokamo ? "0" : "1rem", // ← /kamokamo だけ余白なし
        }}
      >
        {/* ヘッダー（/kamokamo では非表示） */}
        {!isKamokamo && (
          <header
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Link
              href="/kamokamo"
              style={{
                textDecoration: "none",  
                color: "inherit",        
                display: "flex",         
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "1.25rem", margin: 0, cursor: 'pointer' }}>
                かもかも診断
              </h1>
            </Link>
          </header>
        )}

        {children}
      </body>
    </html>
  );
}
