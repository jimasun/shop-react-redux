import { ReactElement } from 'react'

import Header from './header'
import Footer from './footer'

import Challenge from '../challenge/Challenge'

import './main.css'


export const main = (): ReactElement =>

  <div>
    <Header />
    <main>
      <Challenge />
    </main>
    <Footer />
  </div>

export default main