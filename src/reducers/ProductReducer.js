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
    
        default:
            break;
    }

    throw new Error("pas d'action type correspondant")
}

export default reducer