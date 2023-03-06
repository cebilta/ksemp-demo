import React from 'react'
import HeaderImage from '../../components/HeaderImage/HeaderImage'
import NavBar from '../../components/NavBar/NavBar'
import NewsFeed from '../../components/NewFeed/NewsFeed'


export default function Home() {
  return (
    <div>
        <HeaderImage />
        <NavBar />
        <NewsFeed />
    </div>
  )
}
