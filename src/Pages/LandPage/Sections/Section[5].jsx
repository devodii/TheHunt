import React from 'react'
import styled from 'styled-components'
import {Zoom} from "react-reveal"
const SectionFive = () => {
  return (
    <>
      <Container className='mt-12 md:mt-16 flex flex-col gap-4'>
            <span className='bg-white h-56 relative'>
                <Zoom>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-home-bg'>Merits of using TheHunt</h1>
                </Zoom>
            </span>
        
        
        <div className='grid--parent absolute'>
            <div className='flex flex-col gap-4 talent bg-red-500 h-52'>

            </div>

            <div className='flex flex-col gap-4 talent h-2 bg-green-500'>

            </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.section`
    .grid--parent {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
    }
`

export default SectionFive
