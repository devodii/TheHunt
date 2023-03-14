import React from 'react'
import styled from 'styled-components'
import { Zoom
  , Fade, Bounce } from 'react-reveal'
import {GoVerified} from "react-icons/go"
import {CiLocationOn} from "react-icons/ci"
import {FiClock} from "react-icons/fi"

const SectionThree = () => {
  return (
    <>
      <Container className='mt-10 pb-20 flex flex-col gap-4'>
        <Bounce >
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl tracking-wider font-semibold'>Top talents!</h1>
        </Bounce>
        <section className='lw:flex -ml-[3%] flex-wrap gap-4  md:gap-6 pl-7 px-4 md:pl-10 lg:pl-14'>
           {[
            {name: "Eduardo Vedes",
            position: "Full stack developer", 
            imageUrl: "https://eduardovedes.com/assets/header/edo.jpg",
            location: "Faro, Portugal",
            workTime: "40",    
           },
            {name: "Emmanuel Odii",
            position: "Front-end developer", 
            imageUrl: "/Assets/Images/Emmanuel-odii.jfif",
            location: "RIvers, Nigeria",
            workTime: "25",    
           }, 
            {name: "Eduardo Vedes",
            position: "Full stack developer", 
            imageUrl: "https://eduardovedes.com/assets/header/edo.jpg",
            location: "Faro, Portugal",
            workTime: "40",    
           }
           ].map((each) => {
          
            return (
            <>
            <Zoom left>
            <div className='flex flex-col gap-3 py-10 px-10 rounded-md max-w-[400px] w-full flex-1 md:flex-[0.5] lg:flex-[0.3] mx-auto bg-gradient-to-bl from-indigo-800 to bg-home-bg after flex-wrap'>
                <div className='relative'>
                  
                    { each.imageUrl && <img src={each.imageUrl} alt={each.name} className="rounded-full h-20 ring ring-white relative" /> }
                    <GoVerified className='absolute top-1 left-[58px] text-[27px] text-home-bg bg-white rounded-full'/> 
                </div>
                <p className='font-semibold  opacity-95 text-xl md:text-2xl  '>{each.name}</p>
                <p className='-mt-2 text-[15px] md:text-xl tracking-wide'>{each.position}</p>

                <div className='flex gap-3'>
                  <div className='flex gap-2 items-center'>
                    <CiLocationOn className='text-xl'/>
                    <p>{each.location}</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FiClock className='text-xl ' />
                    <p className='font-semibold opacity-95 tracking-wide'>{each.workTime} hrs/wk</p>
                  </div>

                </div>

            </div>
            </Zoom>
            </>
           ); })
           }
        </section>
      </Container>
    </>
  )
}

const Container = styled.div`
  
    
`

export default SectionThree
