import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import data from '../data/Listing.json'

const Explore = () => {

  //console.log(data);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full flex flex-col'>
        <Header />
        <div className='p-8  w-full '>
          <h1 className='text-bold ml-4 text-4xl'>Discover Poplular Properties</h1>
          <div className='grid grid-cols-4'>
            {
              data?.map((property) => {
                return (
                  <div>
                    <Card key={property.property_id} property={property} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
