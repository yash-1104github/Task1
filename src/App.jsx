import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './Pages/Dashboard'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <main className='flex'>
        <Sidebar />
        <div className='w-full flex flex-col'>
          <Header />
          <Dashboard />
        </div>
      </main>
    </>
  )
}

export default App
