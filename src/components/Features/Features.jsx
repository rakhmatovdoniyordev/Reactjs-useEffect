import React from 'react'
import { featuresItems } from '../static'

const Features = () => {
    const features = featuresItems?.map((item)=>(
        <div key={item.id} className='flex flex-col items-center gap-7'>
            <div>
                <img src={item.image} alt="" />
            </div>
            <h2 className='Philosopher text-[25px] font-bold'>{item.title}</h2>
            <p className='text-center'>{item.desc}</p>
        </div>
    ))
  return (
    <section className='my-20'>
        <div className="container__person">
            <div className='w-full flex flex-col items-center mb-11'>
                <h2 className='text-[#DC780B] font-medium tracking-widest'>Features</h2>
                <p className='Philosopher text-[32px] font-bold'>Food with a New Passion</p>
            </div>
            <div className='grid grid-cols-3 gap-[90px]'>
                {features}
            </div>
        </div>
    </section>
  )
}

export default Features