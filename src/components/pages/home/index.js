import React from 'react'
import Header from '../../organisms/header'
import Banner from '../../organisms/banner'
import Episodes from '../../organisms/episodes'
import Footer from '../../organisms/footer'
import About from '../../organisms/about'
import Subscribe from '../../organisms/subscribe'
import Team from '../../organisms/team'
import '../../../UI/index.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Episodes />
      <About />
      <Team />
      <Subscribe />
      <Footer />
    </>
  )
}
