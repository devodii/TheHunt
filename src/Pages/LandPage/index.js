import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Main from './Main'

const Index = () => {
  return (
    <>
      <Container className='text-white'>
       <main className='bg-home-bg h-screen'>
        <Header />
        <Main />
       </main>
      </Container>
    </>
  )
}

const Container=styled.div`

`

export default Index
