import Navbar from '../components/Navbar.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <nav>
      <Navbar />
    </nav>
    <Component {...pageProps} />
  </>
}

export default MyApp
