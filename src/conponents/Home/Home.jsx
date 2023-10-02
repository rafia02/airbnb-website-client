import React from 'react'
import SearchBox from '../Shared/SearchBox'
import Catagories from './Catagories'
import Hotels from './Hotels'

const Home = () => {
  return (
    <div className='pt-10'>
     <Catagories></Catagories>
     <Hotels></Hotels>
    </div>
  )
}

export default Home