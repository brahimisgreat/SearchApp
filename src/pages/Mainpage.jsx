import Body from '../components/Body'
import Header from '../components/Header'
import Searchbar from '../components/searchbar'
import { useState, useEffect } from 'react'

export default function Mainpage() {
  

  
  return (
    <div>
      <Header />
      <Searchbar />
      <Body   />
    </div>
  )
}
