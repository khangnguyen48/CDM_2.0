import React from 'react'
import SubcribeCar from '../../../assets/images/LandingPage/subcribe_car.jpg'


const Newsletter = () => {
  return (
    <div className='w-full bg-[#EDF3F7] py-16 text-white px-4' >
        <div className='max-w-[1240px] mx-auto bg-[#283646] flex flex-row max-lg:flex-col justify-center'>

            <div className='lg:py-20 py-8 px-16 flex-1 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-bold py-2'>Stay Updated With Our Storiers About More Than 200 Superfast Car.</h1>
                <p className='text-gray-400 '>Ready to stay ahead in the world of automotive excellence? By subscribing to CDMA, you're not just signing up for updates; you're unlocking a gateway to an exclusive community of car enthusiasts!</p>
                <div className='my-4'>
                    <div className='flex sm:flex-row flex-col items-center w-full justify-between'>
                        {/* <input className='px-3 py-2 rounded-md flex w-[50%] max-sm:w-[100%]' required type="email" placeholder='Enter your email' />
                        <button className='bg-[#00df9a] hover:bg-[#5effcc] rounded-md text-black font-medium w-[150px] mx-auto ml-4 max-sm:ml-0 my-6 py-2'>Subcribe!</button> */}
                    </div>
                </div>
            </div>
            <img src={SubcribeCar} alt="car"  className='lg:p-8 w-[420px] max-lg:w-[580px]  m-auto rounded-[40px]' />    

        </div>
    </div>
  )
}

export default Newsletter