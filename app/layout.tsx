import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Savimasima | Boutique Web Studio - Belfast',
  description:
    'Savimasima is a Belfast-based front-end studio crafting fast, accessible websites and product features across React, Next.js, and Webflow.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
