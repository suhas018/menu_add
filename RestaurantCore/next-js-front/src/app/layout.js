import PropTypes from 'prop-types';
import { Inter } from "next/font/google";
import Head from "next/head";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Menu",
  description: "UI to handle the Menu",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <main className="menu-container">{children}</main>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;

