import { Outlet } from 'react-router-dom'

import TopAppBar from '../components/ui/TopAppBar'
import PageBackground from '../components/layout/PageBackground'

export default function MainLayout() {
  return (
    <>
      <PageBackground />

      <TopAppBar />

      <main
        style={{
          paddingTop: '80px'
        }}
      >
        <Outlet />
      </main>
    </>
  )
}