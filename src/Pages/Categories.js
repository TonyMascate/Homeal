import React from 'react'
import {PageHero, CategorieCard} from '../Composants/index'
import { useProductContext } from '../context/ProductContext'

function Categories() {
    const {categories} = useProductContext()
    return (
        <main className='page-100'>
            <PageHero title='Catégories'/>
            <div className="categories">
                {categories.map(item => {
                    return <CategorieCard key={item.idCategory} {...item}/>
                })}
            </div>
        </main>
    )
}

export default Categories
