import React from 'react'
import Banner from './Banner/Banner'
import './HomeScreen.css'
import NavBar from './NavBar/NavBar'
import Row from './Rows/Row'
import axious from '../../Axious/axious'
import requests from '../../Axious/Requests'

const HomeScreen = () => {
  return (
    <div className='homescreen' >

      <NavBar />

      <Banner/>

      <Row title="NETFLIX ORIGINAL" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrendig} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen