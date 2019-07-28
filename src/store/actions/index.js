import { idbAddItem } from "../../idb";

export const ADD_SINGLE_PLANT = "ADD_SINGLE_PLANT";
export const REMOVE_SINGLE_PLANT = "REMOVE_SINGLE_PLANT";
export const ADD_IDB = "ADD_IDB";
export const REFRESH_IDB = "REFRESH_IDB";

export const add = (plant) => {
    return {
        type: "ADD",
        plant: plant
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        id: id
    }
}

export const idbAdd = (item, db) => {
    return dispatch => {
        //dispatch isBusy flag or something

        idbAddItem(db, item).then(info => {
            console.log(info);

            //dispatch end isBusy flag
        }).catch(err => {
            console.log(err);

            //dispatch end isBusy flag
        });
    }
}