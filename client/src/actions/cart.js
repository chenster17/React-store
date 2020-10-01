export const addToCart = (item_type,item_id) => {
    return {
        type: "ADD",
        item_type,
        item_id
    }
}
export const removeFromCart = (item_type,item_id)=> {
    return {
        type: "REMOVE",
        item_type,
        item_id
    }
}
export const resetCart = () => {
    return {
        type: "reset"
    }
}
