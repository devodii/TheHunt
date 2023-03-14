import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Fade, Bounce } from 'react-reveal'
import { useInView } from 'react-intersection-observer'
const SectionTwo = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
       setVisible(true)
    },
    {threshold: 0}
    );
    observer.observe(ref.current)
  })
  
  return (
    <>
        <div ref={ref}>
        {visible && 
    <Container className='flex flex-col gap-5 md:gap-7 mt-7 lg:mt-12' ref={ref}>
        
      <p className='text-center text-base lg:text-xl'>Work with some of the worlds Largest firms.</p>
        <ul className=' mx-w-xl grid grid-rows-8 grid-flow-row '>
            {[
                ["Assets/Company-Logos/coquet-logo.png", "coquet"],
                ["Assets/Company-Logos/turing-logo.png", "Turing"],
                ["Assets/Company-Logos/flexiana-logo.png", "Flexiana"],
                ["Assets/Company-Logos/nestle-logo.png", "Nestle"],
                ["Assets/Company-Logos/pixel-logo.png", "Pixel"],
                ["Assets/Company-Logos/dhl-logo.png", "Turing"],
                ["Assets/Company-Logos/FedEx-logo.png", "FedEx"],
            ].map(([each, alt]) => (
                <li>
                    <img src={each} alt={alt} className="" />  
                </li>
            ))
            }
        </ul>
        <Fade left>
        <section className='flex items-center flex-col-reverse gap-4 lg:flex-row lg:pl-10 mt-6 lg:mt-10'>
            <Fade right>
            <img src="Assets/Images/wondering-photo.jpg" alt="The Hunt" className='rounded-md hidden md:block  w-[70%] lg:w-[100%] mx-auto ' />
            </Fade>
            <div className="flex flex-col gap-5 w-full items-center">
                <h1 className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl">Who are we?</h1>
                <Fade top>
                    <button className=' font-semibold tracking-wide hover:btn-hover2 w-1/2  py-1 rounded-full btn-hover'>About</button>
                </Fade>
            </div>
        </section>
        </Fade>
        
    </Container>
    }
    </div>
    </>
  )
}
const Container = styled.section`
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        grid-auto-flow: dense;
        place-content: center;
        grid-auto-rows: 60px;
        gap: 20px
    }
    li {
        display: flex;
        align-items: center;
    }

`

export default SectionTwo
