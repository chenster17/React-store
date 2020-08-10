export const filterState = {
    location:"default",
    filter:{}
}

const filterReducer = (state = filterState, action) => {
    switch(action.type) {
        case"ADD":
            if( typeof state.filter[action.key] === "object"){
                state.filter[action.key].push(action.value);
            }
            else{
                state.filter[action.key] = [action.value];
                }

            return state;
        case "REMOVE":
            const index = state.filter[action.key].indexOf(action.value);
            if(index > -1){
                state.filter[action.key].splice(index,1);
                return state;

            }
            return state;

        case "LOCATION":
            if(action.payload !== state.location){
                return state = {location:action.payload, filter:{}}
            }
            return state;
        default:
            return state
    }
}
export default filterReducer;