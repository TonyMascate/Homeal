import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducers/ProductReducer";
import Categories from "../datas/MealsPerCategorie";

const ProductContext = createContext();

const urlHome = "https://www.themealdb.com/api/json/v1/1/filter.php?a=French";
const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php";

const initialState = {
  products: [],
  filters: {
    category: "Beef",
  },
  loading: true,
  homeproducts: [],
  categories: [],
  productsIndex: 0,
  singleProduct: {},
  showFilters: false,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // FETCH DES PRODUITS PAGE D'ACCUEIL
  const getHomeProducts = async () => {
    dispatch({ type: "SET_LOADING_TRUE" });
    const response = await fetch(urlHome);
    const data = await response.json();
    dispatch({ type: "SET_HOME_PRODUCTS", payload: data.meals.slice(0, 12) });
  };

  // FETCH DES PRODUITS PAGE D'ACCUEIL
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING_TRUE" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  };

  const getAllCategories = async () => {
    dispatch({ type: "SET_LOADING_TRUE" });
    const response = await fetch(urlCategories);
    const data = await response.json();
    dispatch({ type: "SET_ALL_CATEGORIES", payload: data.categories });
  };

  // Fonctions nextslide et prevslide
  const nextSlide = (index) => {
    dispatch({ type: "SET_NEXT_SLIDE", payload: index });
  };
  const prevSlide = (index) => {
    dispatch({ type: "SET_PREV_SLIDE", payload: index });
  };

  // CHANGE SHOW FILTERS
  const changeShowFilters = () => {
    dispatch({ type: "CHANGE_SHOW_FILTERS" });
  };

  // SET CATEGORY
  const setCategory = (element) => {
     dispatch({ type: "CHANGE_CATEGORY", payload: element });
  };

  // UPDATE PRODUCTS
  const updateProducts = async () => {
    dispatch({ type: "SET_LOADING_TRUE" });
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.filters.category}`
    );
    const data = await response.json();
    const productList = data.meals;
    const newProductList = productList.map(item => {
      const newItem = Categories.flat().find(itemc => itemc.idMeal === item.idMeal)
      if(newItem){
        return newItem;
      }else{
        return null
      }
      
    })
    dispatch({ type: "UPDATE_PRODUCTS", payload: newProductList });
  };

  // USEEFFECT
  useEffect(() => {
    updateProducts()
  }, [state.filters.category])

  return (
    <ProductContext.Provider
      value={{
        ...state,
        nextSlide,
        prevSlide,
        getSingleProduct,
        changeShowFilters,
        updateProducts,
        setCategory,
        getHomeProducts,
        getAllCategories,
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
