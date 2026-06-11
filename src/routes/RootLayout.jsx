import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToHash from '../components/ScrollToHash'

export default function RootLayout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main className="pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
