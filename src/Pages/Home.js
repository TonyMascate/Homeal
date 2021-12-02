import React from 'react'
import HomeProducts from '../Composants/HomeProducts'
import { HomeHero, Concept, HomeCategories } from '../Composants/index'

function Home() {
    return (
        <>
        <HomeHero />
        <Concept />
        <HomeProducts />
        <HomeCategories />
        </>
    )
}

export default Home
