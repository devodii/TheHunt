import React from 'react'
import styled from 'styled-components'
import { Fade, Bounce } from 'react-reveal'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const SectionOne = () => {
    
  return ( 
    <>
  
    <Container className='lg:pr-10' >
       
        <Fade right className="mx-auto flex justify-center lg:items-center">
            <div className='flex gap-4 flex-col lg:flex-row mx-auto lg:items-center'>
                <Fade left>
                    <div className=' flex flex-col gap-5 w-full items-center'>
                    <h1 className='font-semibold text-white text-2xl lg:text-4xl' >Land your dream job!</h1>
                    <Fade left>
                    <p className=' text-base lg:text-xl text-slate-200'>Register, Explore, Earn.</p>
                    </Fade>
                    <Fade top>
                        <button className=' font-semibold tracking-wide hover:btn-hover w-1/2  py-1 rounded-full btn-hover2'>Sign Up</button>
                    </Fade>
                    </div>
                </Fade>
                <Fade right>
                    <img src="Assets/Images/Land-a-job.avif" alt="Get that Job"  className='rounded-md hidden md:block  w-[70%] mx-auto lg:h-full lg:w-full '/>
                </Fade>
               
            </div>
            
        </Fade>
       
    </Container>

    </>

  )
}
const Container = styled.main`
    
`

export default SectionOne
