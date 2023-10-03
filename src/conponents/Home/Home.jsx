import React from 'react'
import SearchBox from '../Shared/SearchBox'
import Catagories from './Catagories'
import Hotels from './Hotels'
import FilterModal from './FilterModal'

const Home = () => {
  return (
    <div className='pt-10 '>
     <Catagories></Catagories>
     <Hotels></Hotels>
     <FilterModal></FilterModal>
    </div>
  )
}

export default Home