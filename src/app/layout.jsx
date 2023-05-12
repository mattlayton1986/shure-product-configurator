import './globals.css'
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Shure | Configure Your Product',
  description: 'Configurator for Shure products',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
