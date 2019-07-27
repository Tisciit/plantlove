const plantReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            const afterAdd = [...state].concat(action.plant);
            return afterAdd;

        case "REMOVE":
            const afterRemove = [...state].filter(a => a.id !== action.id);
            return afterRemove;

        default:
            return state;
    }
}

export default plantReducer;