import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/LikesReducer";

const LikesContext = createContext();

const initialstate = {
  likes: [],
};

const LikesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  // ADD TO LIKES
  const manageLikes = (id, name, image, price, liked) => {
    if (liked === true) {
      let newLikes = state.likes.filter((item) => item.id !== id);
      dispatch({ type: "REMOVE_LIKE_ITEM", payload: newLikes });
    } else {
      dispatch({type: 'ADD_LIKE_ITEM', payload: {id, name, image, price}})
    }
  };

  return (
    <LikesContext.Provider
      value={{
        ...state,
        manageLikes,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => {
  return useContext(LikesContext);
};

export { LikesProvider };
