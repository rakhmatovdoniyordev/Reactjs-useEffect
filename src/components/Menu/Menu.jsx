import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar  } from "react-icons/fa";
const BASE__URL = "https://dummyjson.com"

const Menu = () => {
    const [data, setData] = useState(null)
    useEffect(()=> {
        axios
            .get(`${BASE__URL}/products`)
            .then(res => setData(res.data.products))
            .catch(err => err)
            .finally()
    }, [])

    const productsItem = data?.map((product) => (
        <div key={product.id} className='border-[2px] border-[#e2e2e2] rounded-tl-[75px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] h-auto'>
            <div className='h-[264px] w-full p-6 bg-[#bdbdbd9f] rounded-tl-[75px] rounded-tr-[10px] rounded-br-[75px] cursor-pointer'>
                <img src={product.images[0]} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='p-7 flex flex-col justify-between gap'>
                <div className='flex justify-between mb-[20px] items-center gap-[30px]'>
                    <h2 className='Philosopher text-[22px] font-bold cursor-pointer'>{product.title}</h2>
                    <strong className='Philosopher text-[22px] font-bold'>{product.price}$</strong>
                </div>
                <div className='flex-1 mb-5'>
                    <p>{product.description}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <a href="#" className='p-3 rounded bg-[#DB780B]'>
                        <FiPlus className='group text-white'/>
                    </a>
                    <div className='flex gap-1'>
                        <FaStar className='text-[20px] text-[#DB780B]'/>
                        <FaStar className='text-[20px] text-[#DB780B]'/>
                        <FaStar className='text-[20px] text-[#DB780B]'/>
                        <FaRegStar className='text-[20px] text-[#DB780B]'/>
                        <FaRegStar className='text-[20px] text-[#DB780B]'/>
                    </div>
                </div>
            </div>
        </div>
    ))
  return (
    <section className='mb-[50px]'>
        <div className="container__person">
            <div className='w-full text-center mb-[60px]'>
                <p className="text-[#DC780B] font-medium tracking-widest">MENU</p>
                <h2 className="Philosopher text-[32px] font-bold">Food Full of treaty Love</h2>
                <p className='max-w-[750px] text-center inline-block'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <div className='grid grid-cols-3 gap-[30px]'>
                {productsItem}
            </div>
        </div>
    </section>
  )
}

export default Menu