export const addToFilterValueRange =(key,value)=>{
    return{
        type:"ADDRANGE",
        key,
        value
    }
}
export const removeFromFilterRange =(key)=>{
    return{
        type:"REMOVERANGE",
        key,

    }
}
export const addToFilterCheckbox= (key,value) => {
    return {
        type: "ADDCHECKBOX",
        key,
        value
    }
}
export const removeFromFilterCheckbox= (key, value) => {
    return {
        type: "REMOVECHECKBOX",
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