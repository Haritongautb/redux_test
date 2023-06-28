const initialState = {
    counter: 0,
    slideConfig: "autoplay"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SLIDE_CONFIG_SLOW":
            return {
                ...state,
                slideConfig: "slow"
            }
        case "SLIDE_CONFIG_AUTOPLAY":
            return {
                ...state,
                slideConfig: "autoplay"
            }
        case "SLIDE_CONFIG_FAST":
            return {
                ...state,
                slideConfig: "FAST"
            }
        case "COUNTER_PLUS":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "COUNTER_MINUS":
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }
}

export default reducer;