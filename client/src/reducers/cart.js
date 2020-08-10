
const cartReducer = (state = [], action) => {
    switch(action.type) {
        case"ADD":
            return 1
        case "REMOVE":
            return 0
        default:
            return state;
    }
}
export default cartReducer;