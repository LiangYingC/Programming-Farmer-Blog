import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@components/Header/index';
import Footer from '@components/Footer/index';
import { Content } from '@components/Layout/indexStyle';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  pageDesc: string;
  pageURL: string;
  pageType: string;
}

const Layout: FC<LayoutProps> = ({ children, pageTitle, pageDesc, pageURL, pageType }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/assets/favicon-32x32.png" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} key="desc" />
        <meta property="og:type" content={pageType} key="ogType" />
        <meta property="og:title" content={pageTitle} key="ogTitle" />
        <meta property="og:description" content={pageDesc} key="ogDesc" />
        <meta property="og:url" content={pageURL} key="ogUrl" />
        <meta property="og:image" content={''} key="ogImage" />
        <meta property="og:site_name" content="城市碼農" key="ogSiteName" />
        <meta name="twitter:card" content={pageType} key="twitterType" />
        <meta name="twitter:title" content={pageTitle} key="twitterTitle" />
        <meta name="twitter:description" content={pageDesc} key="twitterDesc" />
        <meta name="twitter:url" content={pageURL} key="twitterPageUrl" />
        <meta name="twitter:image" content={''} key="twitterImage" />
        <meta name="twitter:creator" content="@LiangCh95173853" key="twitterCreator" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
