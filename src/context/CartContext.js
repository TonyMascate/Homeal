import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer";

const CartContext = createContext();

const getLocalStorage = () => {
    let cart = localStorage.getItem('homealcart')
    if(cart){
        return JSON.parse(cart)
    }else{
        return []
    }
}

const initialState = {
  cart: getLocalStorage(),
  livraison: 2.5,
  total_price: 0,
  total_items: 0
};



const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addToCart = (id, name, image, price) => {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: { id, name, image, price },
    });
  };
  
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_ITEM_AMOUNT", payload: id });
  };
  
  const decreaseAmount = (itemid, amount) => {
    dispatch({ type: "DECREASE_ITEM_AMOUNT", payload: {itemid, amount} });
  };
  
  const deleteCartItem = (id) => {
    dispatch({type: 'DELETE_CART_ITEM', payload: id})
  }

  const countTotalCart = () => {
    dispatch({type: 'COUNT_TOTAL_CART'})
  }
  
  // USE EFFECTS
  useEffect(() => {
    localStorage.setItem('homealcart', JSON.stringify(state.cart))
    countTotalCart()
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseAmount,
        decreaseAmount,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider };
