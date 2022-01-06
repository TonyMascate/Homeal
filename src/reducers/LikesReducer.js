import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_LIKE_ITEM":
      const {id, name, image, price} = action.payload
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            id: id,
            name: name,
            image: image,
            price: price
          }
        ]
      };
    case "REMOVE_LIKE_ITEM":
      return {
        ...state,
        likes: action.payload
      };

    default:
      break;
  }
  throw new Error("pas d'action type correspondant");
}

export default reducer;
