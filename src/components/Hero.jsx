import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative h-screen w-full mx-auto '>
      {/* Background image */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Added bgcircle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          {/* added line below circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* For name after the circle */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Anindya</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop user interfaces <br className='sm:block hidden' /> and web application</p>
        </div>
      </div>
      {/* Rendering computer */}
      <ComputersCanvas />
    </section>
  )
}

export default Hero