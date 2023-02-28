import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-bootstrap/Container';
import 'react-bootstrap/Nav';
import 'react-bootstrap/Navbar';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
