import React from 'react'
import HomeProducts from '../Composants/HomeProducts'
import { HomeHero, Concept, HomeCategories } from '../Composants/index'

function Home() {
    return (
        <main className='page-100'>
        <HomeHero />
        <Concept />
        <HomeProducts />
        <HomeCategories />
        </main>
    )
}

export default Home
