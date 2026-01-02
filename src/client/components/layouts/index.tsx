import React from 'react'
import Header from './header'
import Routing from '@/client/routes'
import Footer from './footer'

const Layout = () => {
  return (
    <>
    <Header />
    <main>
    <Routing />
    </main>
    <Footer />
    </>
  )
}

export default Layout