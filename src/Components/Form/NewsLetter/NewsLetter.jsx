import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import "./styles.css"
const NewsLetter = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
  return (
    <>
      <Container className='pb-20 mt-6 flex flex-col gap-4 px-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-[500]'>Subscribe to our newsletter</h1>
            <p className='text-xs md:text-xl max-w-[500px] -mt-2'>Stay tuned for the latest developments, blogs, and tips on how to increase productivity</p>
       
            
            <form action="" className=' h-72 w-[100%] lg:-mt-14 md:flex md:items-center gap-4'>
        
                    <div className='flex flex-col'>
                      
                        <div className=' h-32 mt- w-[100%] flex flex-col sm:flex-row gap-8 sm:gap-3'>
                        <fieldset className='relative w-full max-w-[800px]'>
                            <input type="text"
                                id='firstname'
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className=' border-b-2 bg-inherit outline-none w-[100%] pl-2'/>
                                <label htmlFor="firstname" className='absolute -top-[2px] left-0'>First name</label>
                        </fieldset>

                        <fieldset className=' w-full  max-w-[900px] relative'>
                            <input type="text"
                                id='lastname'
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className=' border-b-2 bg-inherit outline-none w-[100%] pl-2'/>
                                <label htmlFor="lastname" className='absolute -top-[2px] left-0'>Last name</label>
                        </fieldset>  
                        </div>

                    <fieldset className='relative w-full max-w-[1000px] -mt-3 sm:-mt-[76px]'>
                        <input type="text"
                                id='lastname'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' border-b-2 bg-inherit outline-none w-[100%] pl-2'/>
                                <label htmlFor="lastname" className='absolute -top-[2px] left-0'>Email address</label>
                 </fieldset> 
                 
                 <button className='font-semibold tracking-wide hover:btn-hover cursor-pointer w-1/2 lg:w-1/3 mx-auto  py-1 rounded-full btn-hover2 mt-4' >Subscribe</button>

                    </div>


                     <div className='hidden md:block '>
                        <img src="/Assets/Images/Newsletter.png" className=' h-64' alt="NewsLetter" />
                     </div>
            </form>

      </Container>
    </>
  )
}

const Container = styled.section`
    label {
        pointer-events: none;
        transition: all .25s ;
    }
    
`

export default NewsLetter
