import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { useProductContext } from '../context/ProductContext'

function PrevBtn({index}) {

    const {prevSlide} = useProductContext()

    return (
      <div className="prevBtn" onClick={() => prevSlide()}>
        <IoIosArrowBack />
      </div>
    );
}


export default PrevBtn
