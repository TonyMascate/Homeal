import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import { useProductContext } from '../context/ProductContext'

function NextBtn({index}) {

    const {nextSlide} = useProductContext()

    return (
        <button className='nextBtn' onClick={() => nextSlide()}>
            <IoIosArrowForward />
        </button>
    )
}

export default NextBtn
 