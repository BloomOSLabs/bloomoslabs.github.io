import { Outlet } from 'react-router-dom'

import TopAppBar from '../components/ui/TopAppBar'
import PageBackground from '../components/layout/PageBackground'
import Footer from '../components/ui/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'

export default function MainLayout () {
  return (
    <>
      <ScrollToTop />

      <PageBackground />

      <TopAppBar />

      <main
        style={{
          paddingTop: '80px'
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
