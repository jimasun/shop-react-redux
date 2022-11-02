import React from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import 'normalize.css'
import './Container.css'

const Container = ({ children }) =>
  <div className='Container'>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>

export default Container