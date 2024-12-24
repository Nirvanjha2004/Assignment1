import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ErrorPage() {
  return (
    <div>
        <Navbar/>
        <div className='flex mb-3 flex-col justify-center items-center'>
            <img src="/error.png" className='mt-3' alt="" />
            <button className="bg-purple-600 rounded-md h-10 pr-5 pl-5 p-2 text-white">Back To Homepage</button>
        </div>
        <Footer/>
    </div>
  )
}

export default ErrorPage