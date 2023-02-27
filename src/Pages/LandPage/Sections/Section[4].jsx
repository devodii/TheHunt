import React from 'react'
import styled from 'styled-components'
import {GiCheckeredFlag} from "react-icons/gi"
import { Link } from 'react-router-dom'
import {BsWallet2 } from "react-icons/bs"
const SectionFOur = () => {
  return (
   <>
    <Container className='flex flex-col gap-4'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl text-center'>How it Works </h1>
        <section>
        <div className='flex'>
        <div className='flex flex-col gap-7 flex-1 items-center'>
            <div className='max-w-[400px] flex flex-col gap-2 lg:flex-row items-center'>
                <div className='flex flex-1 md:w-full -ml-10 md:ml-10'>
                    <GiCheckeredFlag className='text-5xl md:text-6xl lg:text-7xl flex-1 flex sm:-ml-10 lg:ml-0' />
                </div>
                <div className='lg:space-y-1'>
                    <h2 className='text-center text-xl lg:text-left font-semibold opacity-90 md:text-2xl w-[90%] md:w-full'>Register</h2>
                    <p className='text-center md:text-xl lg:text-left w-[90%] md:w-full'>TheHunt is an asynchronous work platform. To get started, you'd have to
                    <Link to="/" className=" underline mx-2">register.</Link></p>
                </div>
               
            </div>
        </div>
    </div>
  
  
        <div className='flex '>
        <div className='flex flex-col gap-7 flex-1  items-center'>
            <div className='max-w-[400px] flex flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center'>
                <div className='flex flex-1 w-[90%] md:w-full'>
                    <BsWallet2 className='text-5xl md:text-6xl lg:text-7xl flex-1 flex' />
                </div>
                    <div className='lg:space-y-1'>
                    <h2 className='text-center text-xl lg:text-left font-semibold opacity-90 w-[90%] md:w-full md:text-2xl'>Earn</h2>
                    <p className='text-center md:text-xl lg:text-left w-[90%] md:w-full'>Earn through referrals and jobs while keeping 100% of your earnings. </p>
                    </div>
               
            </div>
        </div>
    </div>
    </section>
    </Container>
   </>
  )
}
const Container = styled.div`
    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
        grid-gap: 30px;
    }
  
`

export default SectionFOur
