import Head from 'next/head';
import { Footer, NavBar } from "@/components";
interface Metadata {
  title: string;
  description: string;
  keywords: string[];
}
export const metadata: Metadata = {
  title: "morocco motorcycles",
  description: "Discover world's best Motorcycles showcase application",
  keywords: ['MA-Motorcycle', 'Morocco Motorcycles', 'Motorcycles', 'Taha Salgane', 'Yamaha Mate 50', "NextJs "]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
