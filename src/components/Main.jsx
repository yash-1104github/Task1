import React from 'react'

const Main = () => {
    return (
        <div className='flex flex-col w-full p-8'>
            <div className='flex  gap-4'>
                <div className='p-4'>
                    <div className='flex  justify-between'>
                        <div className='ml-4 text-2xl  text-blue-500'>NFT Marketplace</div>
                        <img src='dot.svg' className='h-6' />
                    </div>
                    <div >
                        <img src='Mask Group.png' className='rounded-2xl z-0 mt-2 w-[400px] h-[200px]  hover:shadow-xl hover:scale-105 transition-all duration-300' />
                    </div>
                </div>

                <div className='p-4  ml-4'>
                    <div className='flex  justify-between'>
                        <p className='ml-3 text-2xl  text-blue-500'>Investement Stats</p>
                        <img src='dot.svg' className='h-6' />
                    </div>
                    <div className='flex-col bg-gray-100 mt-2 rounded-2xl text-sm p-2 w-[400px] h-[200px]  hover:shadow-xl hover:scale-110 transition-all duration-300'>
                        <div className='flex  h-[125px] justify-between'>
                            <div className='flex-col '>
                                <div className='flex item-center'>
                                    <img src='Group 13.svg' className='' />
                                </div>
                                <div className='flex item-center'>
                                    <img src='Group 14.svg' className='' />
                                </div>
                                <div className='flex item-center'>
                                    <img src='Group 17.svg' className='' />
                                </div>
                            </div>
                            <div>
                                <img src='Group 15.png ' className='flex mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-4'>
                <div className='mt-4  w-[300px] h-full p-2'>
                    <div className='flex  justify-between'>
                        <p className='text-2xl text-blue-500' >NFTs owned</p>
                        <img src='dot.svg' className='h-6' />
                    </div>

                    <div className='flex justify-between mt-2 '>
                        <div className='flex flex-col'>
                            <p>Roma Avenue</p>
                            <p className='text-sm text-gray-500'>0.91 Ether</p>
                        </div>
                        <div className='flex-col'>
                            <img src='Vector 1.png' className='w-[40px] h-[20px]' />
                            <p className='text-sm text-green-400'>+10 %</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div className='flex flex-col'>
                            <p>Thorian Park</p>
                            <p className='text-sm text-gray-500'>0.89 Ether</p>
                        </div>
                        <div className='flex-col'>
                            <img src='Vector 1.png' className='w-[40px] h-[20px]' />
                            <p className='text-sm text-green-400'>+19 %</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-2 '>
                        <div className='flex flex-col'>
                            <p>Linda Mansion</p>
                            <p className='text-sm text-gray-500'>1.1 Ether</p>
                        </div>
                        <div className='flex-col'>
                            <img src='Vector 1.png' className='w-[40px] h-[20px]' />
                            <p className='text-sm text-red-400'>-17 %</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div className='flex flex-col'>
                            <p>Villa Mary</p>
                            <p className='text-sm text-gray-500'>0.71 Ether</p>
                        </div>
                        <div className='flex-col'>
                            <img src='Vector 1.png' className='w-[40px] h-[20px]' />
                            <p className='text-sm text-green-400'>+22 %</p>
                        </div>
                    </div>
                </div>

                <div className='mt-8 gap-4 p-2  h-full w-full mx-4'>
                    <h3 className='text-2xl text-blue-500' > Total Distribution</h3>

                    <div className='flex gap-2 mt-8 '>
                        <div className='text-gray-800 '>
                            <p className=''>300</p>
                            <p className='mt-1'>200</p>
                            <p className='mt-1'>100</p>
                            <p className='mt-1 ml-2'>0</p>
                        </div>

                        <div className='flex-col w-full ml-2'>
                            <img src='Vector 6.png' className='ml-3 w-[80%] h-[40px]'/>
                            <div className='mt-12 flex w-full  mx-5 text-gray-800'>
                                <p className='mx-6'>Mon</p>
                                <p className='mx-6'>Tue</p>
                                <p className='mx-6'>Wes</p>
                                <p className='mx-6'>Fri</p>
                                <p className='mx-6'>Sat</p>
                                <p className='mx-6'>Sun</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
