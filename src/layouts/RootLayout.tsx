import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 *
 * To customize the header or footer, directly edit the Header.tsx and Footer.tsx
 * files in the layouts/parts directory.
 *
 * Site-wide <title> and <meta> live in the <Helmet> below. Individual pages can
 * override them by rendering their own <Helmet> — last-mounted wins.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>JNN College of Engineering, Shivamogga | VTU Affiliated | AICTE Approved</title>
        <meta name="description" content="JNN College of Engineering (JNNCE), Shivamogga, Karnataka — Affiliated to VTU and approved by AICTE. Offering B.E. programs in CSE, ECE, Mechanical, Civil, EEE, and ISE with excellent placements." />
      </Helmet>
      <ScrollRestoration />
      <Header />
	   <main className="pt-40">
        {children}
      </main>
      
      <Footer />
    </Website>
  );
}
