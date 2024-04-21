import type { Metadata } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Sofrix | Hire Developers & Expert Teams';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Sofrix is a global provider of software development services, including software development, software consulting, and software development outsourcing.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://nextarter-chakra.sznm.dev',
    title: APP_NAME,
    description: 'Sofrix is a global provider of software development services, including software development, software consulting, and software development outsourcing.',
    images: {
      url: '/logo.png',
      alt: 'nextarter-chakra.sznm.dev og-image',
    },
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
