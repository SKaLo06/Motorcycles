import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "morocco motorcycles",
  description: "Discover world's best Motorcycles showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}