import React, { useEffect } from 'react'
import HomeProducts from '../Composants/HomeProducts'
import { HomeHero, Concept, HomeCategories } from '../Composants/index'
import { useProductContext } from '../context/ProductContext'

function Home() {
    const {getHomeProducts, getAllCategories} = useProductContext()

    useEffect(() => {
        getAllCategories()
        getHomeProducts()
    }, [])

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
