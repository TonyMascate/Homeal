import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { useProductContext } from '../context/ProductContext'

function PrevBtn({index}) {

    const {prevSlide} = useProductContext()

    return (
      <button className="prevBtn" onClick={() => prevSlide()}>
        <IoIosArrowBack />
      </button>
    );
}


export default PrevBtn
