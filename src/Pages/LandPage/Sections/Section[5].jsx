import React from 'react'
import styled from 'styled-components'
import {Zoom, Roll} from "react-reveal"
import {GoVerified} from "react-icons/go"
const SectionFive = () => {
  return (
    <>
      <Container className='mt-12 md:mt-16 flex flex-col gap-4'>
            <span className=' bg-slate-200 h-56'>
                <Zoom>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium  text-home-bg mt-9'>Merits of using TheHunt</h1>
                </Zoom>
            </span>
        
        
        <div className='grid--parent -mt-[140px] z-[5] mx-auto'>
          <Roll left>
            <div className='flex flex-col gap-3 md:gap-4 talent color rounded-md p-4'>
                <h2 className='text-2xl lg:text-3xl text '>For Companies</h2>
                <p className='text-[18px]'>A few benefits for companies using TheHunt.</p>
                  {[
                    {title: "cost savings",
                    description: "TheHunt reveals costs associated with development and other expenses for cost reduction"
                  },
                  {
                    title: "Knowledge sharing",
                    description: "Get new insights and ideas by sharing knowledge "
                  },
                  {
                    title: "Collaboration prospects",
                    description: "Companies can collaborate to achieve common goals and grow together"
                  }
                  ].map((each) => (
                    <>
                    <ul>
                      <li className='flex gap-3 md:gap-4 items-start'>
                        <span className='mt-2'> <GoVerified className='text-xl' /> </span>
                        <div className='flex flex-col gap-2'>
                          <p className='font-semibold text-[17px] md:text-xl '>{each.title}</p>
                          <p className='max-w-[350px]'>{each.description}</p>
                        </div>
                        
                      </li>
                    </ul>
                    </>
                  ))
                  }
            </div>
          </Roll>

          <Roll right>
            <div className='flex flex-col gap-3 md:gap-4 talent color--inverse rounded-md p-4'>
                <h2 className='text-2xl lg:text-3xl text '>For Talents</h2>
                <p className='text-[18px]'>A few benefits for companies using TheHunt.</p>
                  {[
                    {title: "Reduced turnover",
                    description: "Companies at TheHunt values their employee and are more likely to retain them"
                  },
                  {
                    title: "Stronger teamwork",
                    description: "Talent creates a supportive environment for improved results. "
                  },
                  {
                    title: "Competitive Salaries",
                    description: "Companies at TheHunt provides good-enough salaries at each skill level "
                  }
                  ].map((each) => (
                    <>
                    <ul>
                      <li className='flex gap-3 md:gap-4 items-start'>
                        <span className='mt-2'> <GoVerified className='text-xl' /> </span>
                        <div className='flex flex-col gap-2'>
                          <p className='font-semibold text-[17px] md:text-xl '>{each.title}</p>
                          <p className='max-w-[350px]'>{each.description}</p>
                        </div>
                        
                      </li>
                    </ul>
                    </>
                  ))
                  }
            </div>
            </Roll>

           
        </div>
      </Container>
    </>
  )
}

const Container = styled.section`
    .grid--parent {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        width: 100%;
        max-width: 1040px;
    }
    .color {
      background: linear-gradient(90deg, rgba(15,23,42), #6610f2 );
    }
    .color--inverse {
      background: linear-gradient(90deg, #6610f2, rgb(15, 23, 42));
    }
`

export default SectionFive
