import React, {useEffect} from "react";
import img from "../../assets/about.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init();
  }, [])
  return (
    <section className="mb-[100px]">
      <div className="container__person">
        <div className="grid grid-cols-2 gap-[97px]">
          <div  data-aos="flip-left">
            <img src={img} alt="" className="rounded-[30px]"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-[30px]" data-aos="flip-right">
            <h2 className="text-[#DC780B] font-medium tracking-widest">ABOUT US</h2>
            <p className="Philosopher text-[32px] font-bold">
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </p>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <button className="rounded-md py-[12px] px-[25px] bg-[#DC780B] text-white border border-[#DC780B] duration-500 hover:bg-white hover:text-black">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
