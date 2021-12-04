import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducers/ProductReducer";

const ProductContext = createContext();

const urlHome = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=French'
const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php";

const initialState = {
  products: [],
  loading: false,
  homeproducts: [],
  categories: [],
  productsIndex: 0
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // FETCH DES PRODUITS PAGE D'ACCUEIL
  const getHomeProducts = async() => {
    dispatch({type: 'SET_LOADING_TRUE'})
    const response = await fetch(urlHome)
    const data = await response.json()
    dispatch({type: 'SET_HOME_PRODUCTS', payload: data.meals.slice(0,12)})
  };

  const getAllCategories = async() => {
    dispatch({type: 'SET_LOADING_TRUE'})
    const response = await fetch(urlCategories);
    const data = await response.json();
    dispatch({ type: "SET_ALL_CATEGORIES", payload: data.categories});
  }

  // Fonctions nextslide et prevslide
  const nextSlide = (index) => {
    dispatch({type: 'SET_NEXT_SLIDE', payload: index})
  }
  const prevSlide = (index) => {
    dispatch({type: 'SET_PREV_SLIDE', payload: index})
  }

  // USEEFFECT
  useEffect(() => {
    getHomeProducts()
    getAllCategories()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        ...state,
        nextSlide,
        prevSlide
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider };
