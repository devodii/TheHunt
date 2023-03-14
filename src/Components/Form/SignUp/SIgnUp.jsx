import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SIgnUp = () => {
  return (
    <>
      <Container className='mx-auto max-w-7xl flex flex-col gap-4 '>
        <div className='flex flex-col  items-center gap-4'>
          <h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4'>Sign up for TheHunt</h1>
          <p className='text-xl text-white'>
            Create a free account or 
             <Link className='ml-2 underline tracking-wider'>
              Login
             </Link>
             </p>
        </div>

        <form action="" className='mx-auto w-[100%] flex'>
          <label htmlFor=""></label>
          <input type="email" className='border bg-inherit rounded-sm w-[100%] max-w-sm mx-auto'/>
        </form>
      </Container>
    </>
  )
}

const Container = styled.main`
    
`

export default SIgnUp
