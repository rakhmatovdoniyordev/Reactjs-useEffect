import React, { useEffect, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar  } from "react-icons/fa";
import AOS from 'aos';
// import Loading from '../loading/Loading';
import 'aos/dist/aos.css';
import { useFetch } from '../../hook/useFetch';

const Menu = () => {
    const count = 6
    const [category, setCategory] = useState("/")
    const [offset, setOffset] = useState(1)
    const {data, error, loading} = useFetch(`/products${category}`, {limit: offset*count}, [offset, category])
    const {data: categories} = useFetch("/products/category-list")

    useEffect(()=> {
        setOffset(1)
    }, [category])

    useEffect(()=>{
        AOS.init();
    }, [])


    const categoryItem = categories?.map(item => (
        <li
            onClick={()=> setCategory(`/category/${item}`)}
            className={`py-2 px-5 border rounded-md cursor-pointer ${`/category/${item}` === category ? "text-white bg-[#DB780B]" : "border-[#DB780B] text-black"}`}
            key={item}>
            {item}
        </li>
    ))

    const productsItem = data?.products?.map((product) => (
        <div key={product.id} className='border-[2px] border-[#e2e2e2] rounded-tl-[75px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] h-auto' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <div className='h-[264px] w-full p-6 bg-[#bdbdbd9f] rounded-tl-[75px] rounded-tr-[10px] rounded-br-[75px] cursor-pointer'>
                <img src={product.images[0]} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='p-7 flex flex-col'>
                <div className='flex justify-between mb-[20px] items-center gap-[30px]'>
                    <h2 className='Philosopher text-[22px] font-bold cursor-pointer'>{product.title}</h2>
                    <strong className='Philosopher text-[22px] font-bold'>{product.price}$</strong>
                </div>
                <div className='mb-5'>
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
                <p className="text-[#DC780B] font-medium tracking-widest">Products</p>
                <h2 className="Philosopher text-[32px] font-bold">Products Full of treaty Love</h2>
                <p className='max-w-[750px] text-center inline-block'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <ul className='flex whitespace-nowrap gap-3 overflow-auto pb-5'>
                <li
                    className={`py-2 px-5 border rounded-md cursor-pointer ${`/` === category ? "text-white bg-[#DB780B]" : "border-[#DB780B] text-black"}`}
                    onClick={()=> setCategory("/")}
                    key="All">
                    All
                </li>
                {categoryItem}
            </ul>
            <div className='grid grid-cols-3 gap-[30px] mt-9'>
                {loading}
                {
                productsItem
                }
            </div>
            <div className='w-full text-center mt-12'>
                {
                    offset * count < data?.total &&
                <button
                className='rounded-md py-[12px] px-[25px] bg-[#DC780B] text-white border border-[#DC780B] duration-500 hover:bg-white hover:text-black disabled:bg-red-500 disabled:cursor-not-allowed'
                onClick={()=> setOffset(p => p + 1)}
                disabled={loading}>
                    {loading ? "Loading..." : "See More"}
                </button>
                }
            </div>
        </div>
    </section>
  )
}

export default Menu