import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import NewsLetter from '../../Components/Form/NewsLetter/NewsLetter'
import SectionOne from './Sections/Section[1]'
import SectionTwo from './Sections/Section[2]'
import SectionThree from './Sections/Section[3]'
import SectionFOur from './Sections/Section[4]'
import SectionFive from './Sections/Section[5]'

const Main = () => {
  return (
    <>
    <Container className='pt-24 max-w-7xl mx-auto w-full flex flex-col gap-4 md:gap-7 bg-home-bg overflow-hidden'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFOur />
        <SectionFive />
        <NewsLetter />
        <Footer />
    </Container>
     
    </>
  )
}
const Container = styled.div``

export default Main
