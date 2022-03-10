import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'

import { UserContext } from '../lib/context';
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: 'jeff' }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
