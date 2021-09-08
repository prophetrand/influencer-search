import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Main = styled.div`
  padding: 2rem 0;
  flex: 1;
  flex-direction: column;
  text-align: center;
`
const Title = styled.h1`
  line-height: .5;
  font-size: 4rem;
`
const Subtitle = styled.h2`
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 500;
`

const Home = () => {
  return (
    <Container>
      <Head>
        <title>MetNu Influencer Search</title>
        <meta name="description" content="Powered by NextJS and React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Title>TikTok Influencer Search</Title>
        <Subtitle>MetNu Internal Tool</Subtitle>
        <Button primary>Get Started</Button>
      </Main>

      <Footer />

    </Container>
  )
}

export default Home;