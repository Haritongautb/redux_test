export const countPlus = (number) => {
    return {
        type: "COUNTER_PLUS",
        payload: number
    }
}

export const countMinus = (number) => {
    return {
        type: "COUNTER_MINUS",
        payload: number
    }
}

export const slideConfigFast = () => {
    return {
        type: "SLIDE_CONFIG_FAST"
    }
}

export const slideConfigAutoplay = () => {
    return {
        type: "SLIDE_CONFIG_AUTOPLAY"
    }
}

export const slideConfigSlow = () => {
    return {
        type: "SLIDE_CONFIG_SLOW"
    }
}