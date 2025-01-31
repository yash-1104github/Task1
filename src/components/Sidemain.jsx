import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Sidemain = () => {
    return (
        <div className='w-[350px] bg-green-50'>
            <div className='mt-10 p-4 ml-4 text-2xl text-blue-500'>
                My Cards

                <img src='card.svg' className='mt-4 w-3xl   hover:scale-105 transition-all duration-300' />
                <img src='Group 33.png' className='mt-5 ml-20' />

                <div className='mt-5 flex justify-between  '>
                    <p className='text-2xl text-blue-500' >Top Picks</p>
                    <img src='dot.svg' className='h-6 ' />
                </div>

                <div className='mt-2 text-gray-500 '>
                    <div className='text-sm '>
                        <div className='flex justify-between  text-black'>
                            Roma Avenue
                            <FaArrowRight  className='mt-2 text-gray-600'/>
                        </div>
                        <div className='flex  justify-between'>
                            <p>$400,000</p>
                            <p>0.0000345 Ether</p>
                        </div>
                    </div>
                    <div className='text-sm mt-2 '>
                        <div className='flex justify-between  text-black'>
                            Atlas Shack
                            <FaArrowRight className='mt-2  text-gray-600'/>
                        </div>

                        <div className='flex  justify-between'>
                            <p>$500,000</p>
                            <p>0.0000678 Ether</p>
                        </div>
                    </div>
                    <div className='text-sm mt-2'>
                        <div className='flex justify-between  text-black'>
                            Germanrin
                            <FaArrowRight className='mt-2  text-gray-600'/>
                        </div>

                        <div className='flex  justify-between'>
                            <p>$786,000</p>
                            <p>0.0000887 Ether</p>
                        </div>
                    </div>
                    <div className='text-sm mt-2'>
                        <div className='flex justify-between  text-black'>
                            Heavens
                            <FaArrowRight className='mt-2  text-gray-600'/>
                        </div>

                        <div className='flex  justify-between'>
                            <p>$667,000</p>
                            <p>0.0000761 Ether</p>
                        </div>
                    </div>
                    <div className='text-sm mt-2'>
                        <div className='flex justify-between  text-black'>
                            Heretho
                            <FaArrowRight className='mt-2  text-gray-600' />
                        </div>

                        <div className='flex  justify-between'>
                            <p>$384,000</p>
                            <p>0.0000302 Ether</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sidemain
