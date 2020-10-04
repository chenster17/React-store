
const cartReducer = (state = {list:[],num:0}, action) => {
    switch(action.type) {
        case"ADD":
            state.num += 1;
            state.list.push({"type":action.item_type,"id":action.item_id})
            return state
        case "REMOVE":
            state.num -= 1;
            return 0
        default:
            return state;
    }
}
export default cartReducer;