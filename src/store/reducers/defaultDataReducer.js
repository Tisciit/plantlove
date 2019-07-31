//TODO: Import defaultData constants

const defaultDataReducer = (state = [], action) => {
    switch(action.type){
        case "UPDATEDEFAULTPLANTS":
            return action.data;
        
        default:
            return state;
    }
}

export default defaultDataReducer;