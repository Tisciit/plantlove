import {ADD_SINGLE_PLANT, REMOVE_SINGLE_PLANT} from "../actions";

const plantReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SINGLE_PLANT:
            const afterAdd = [...state].concat(action.plant);
            return afterAdd;

        case REMOVE_SINGLE_PLANT:
            const afterRemove = [...state].filter(a => a.id !== action.id);
            return afterRemove;

        default:
            return state;
    }
}

export default plantReducer;