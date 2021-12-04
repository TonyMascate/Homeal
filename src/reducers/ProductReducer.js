function reducer(state, action) {

    switch (action.type) {
        case 'SET_LOADING_TRUE':
            return{
                ...state,
                loading: true
            }
        case 'SET_HOME_PRODUCTS':
            return{
                ...state,
                homeproducts: action.payload,
                loading: false
            }
        case 'SET_ALL_CATEGORIES':
            return{
                ...state,
                categories: action.payload,
                loading: false
            }
        case 'SET_NEXT_SLIDE':
            let newIndex = state.productsIndex + 1;
            if(newIndex > state.homeproducts.length - 1){
                newIndex = 0
            }
            console.log(state.productsIndex);
            return{
                ...state,
                productsIndex: newIndex
            }
    
        default:
            break;
    }

    throw new Error("pas d'action type correspondant")
}

export default reducer