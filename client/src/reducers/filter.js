export const filterState = {
    location:"default",
    filter:{}
}

const filterReducer = (state = filterState, action) => {
    switch(action.type) {
        case"ADDCHECKBOX":
            if( typeof state.filter[action.key] === "object"){
                state.filter[action.key].push(action.value);
            }
            else{
                state.filter[action.key] = [action.value];
                }

            return state;
        case "REMOVECHECKBOX":
            const index = state.filter[action.key].indexOf(action.value);
            if(index > -1){
                state.filter[action.key].splice(index,1);
                if (state.filter[action.key].length === 0){
                    delete state.filter[action.key];
                }
                return state;
            }
            return state;

        case "ADDRANGE":
            state.filter[action.key] = action.value;
            return state;
        case "REMOVERANGE":
            delete state.filter[action.key];
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