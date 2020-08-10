export const addToFilter= (key,value) => {
    return {
        type: "ADD",
        key,
        value
    }
}
export const removeFromFilter= (key, value) => {
    return {
        type: "REMOVE",
        key,
        value
    }
}
export const currentLocation = (payload) => {
    return{
        type: "LOCATION",
        payload
    }
}
export const resetFilter =()=> {
    return {
        type: "RESET"
    }
}