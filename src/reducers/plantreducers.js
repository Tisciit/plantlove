const defaultValue = () => {
    return checkStore() ? localStorage.getItem("plants") || [] : [];
}

const checkStore = () => {
    return typeof Storage !== undefined;
}

const setLocalStore = (val) => {
    localStorage.setItem("plants", val);
}

const plantReducer = (state = defaultValue(), action) => {
    switch (action.type) {
        case "ADD":
            const afterAdd = [...state].concat(action.plant);
            if (checkStore()) {
                setLocalStore(afterAdd);
            };
            return afterAdd;

        case "REMOVE":
            const afterRemove = [...state].filter(a => a.id !== action.id);
            if (checkStore()) {
                setLocalStore(afterRemove);
            }
            return afterRemove;

        default:
            return state;
    }
}

export default plantReducer;