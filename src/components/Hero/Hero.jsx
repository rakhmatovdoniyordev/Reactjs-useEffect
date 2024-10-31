import React from 'react'
import { HeroBtns } from '../static'
import heroImage from "../../assets/hero.png"

const Hero = () => {
  return (
    <section>
        <div className="container__person">
            <div className='grid grid-cols-2 gap-[9px]'>
                <div className='flex flex-col justify-center gap-[50px]'>
                    <h2 className='Philosopher text-[48px] font-bold'>Making time a good time by making food the good food.</h2>
                    <p className='font-medium'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                    <div className='flex gap-8'>
                        {HeroBtns?.map((btn, inx) => (
                            <button key={inx} className='rounded-md py-[20px] px-[40px] bg-[#DC780B] text-white border duration-500 border-[#DC780B] hover:bg-white hover:text-black'>{btn}</button>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero