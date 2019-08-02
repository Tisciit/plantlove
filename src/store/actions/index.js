import {
    idbAddItem,
    idbGetAllItems,
    DEFAULT_PLANTS_DB,
    idbPutItem,
    idbObjectStoreAutoInrements,
} from "../../idb";

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

export const updateDefaultPlants = (plants) => {
    return {
        type: "UPDATEDEFAULTPLANTS",
        data: plants
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

export const idbGetDefaultPlants = () => {
    return dispatch => {
        //TODO: Dispatch App Loading State

        idbGetAllItems(DEFAULT_PLANTS_DB).then(data => {
            dispatch(updateDefaultPlants(data));
            //TODO: Dispatch App end loading state
        }).catch(reject => {
            //TODO: Dispatch App end loading state
            //TODO: Dispatch error message
        });
    }
}

//Refresh all items in indexedDB according to the store.
export const idbRefresh = (db, items, keyAttr) => {
    return dispatch => {

        if (!idbObjectStoreAutoInrements(db)) {
            //keyPath is defined in db
            items.forEach(item => {
                idbPutItem(db, item);
            });
        } else {

            //no keyPath (autoIncrement = true)
            //Store a copy of items in tmp_items
            const tmp_items = [...items];
            idbGetAllItems(db).then(data => {
                data.foreach(dt => {
                    const index = tmp_items.findIndex(elt => elt[keyAttr] === db[keyAttr]);
                    if (index !== -1) {
                        const item = tmp_items.splice(index, 1);
                        idbPutItem(db, item, keyAttr);
                    }
                });
            });
        }

    }
}