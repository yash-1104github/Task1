import React from 'react'
import Main from './main.jsx'
import Sidemain from './sidemain.jsx'

const Dashboard = () => {
  return (
    <div className=' container h-[91vh] fext justify-between flex '>
      <Main/>
      <Sidemain/>
    </div>
  )
}

export default Dashboard
