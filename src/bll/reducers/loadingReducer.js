const LOADING = 'LOADING'


const initialState = {
    isLoading: true
}

export const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

export const loading = (value) => ({type:LOADING, value})

