import React from "react";

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const { id, image, name, price } = action.payload;
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: id,
            name: name,
            image: image,
            price: price,
            amount: 1,
          },
        ],
      };

    case "INCREASE_ITEM_AMOUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case "DECREASE_ITEM_AMOUNT":
      const { itemid, amount } = action.payload;
      if (amount - 1 < 1) {
        let newCart = state.cart.filter((item) => item.id !== itemid);
        return {
          ...state,
          cart: newCart,
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === itemid ? { ...item, amount: item.amount - 1 } : item
        ),
      };

    case "DELETE_CART_ITEM":
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };

    case 'COUNT_TOTAL_CART':
      let subtotal = state.cart.reduce(
        (total, cartItem) => {
          total.totalCart += cartItem.price * cartItem.amount;
          total.totalAmount += cartItem.amount;
          return total;
        },
        {
          totalCart: 0,
          totalAmount: 0,
        }
      );
      return {
        ...state,
        total_items: subtotal.totalAmount,
        total_price: parseFloat(subtotal.totalCart),
      };

    case 'CLEAR_CART':
      return{
        ...state,
        cart: []
      }

    default:
      break;
  }
  throw new Error("pas d'action type correspondant");
}

export default CartReducer;
