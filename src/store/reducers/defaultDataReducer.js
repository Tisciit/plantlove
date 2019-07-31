//TODO: Import defaultData constants

const theState = {
    "pilea": {
        c1: "1",
        c2: "2",
        c3: "3"
    },
    "monstera": {
        c1: "4",
        c2: "5",
        c3: "6"
    }
}

const defaultDataReducer = (state = theState, action) => {
    switch (action.type) {
        case "UPDATEDEFAULTPLANTS":
            return action.data;

        default:
            return state;
    }
}

export default defaultDataReducer;