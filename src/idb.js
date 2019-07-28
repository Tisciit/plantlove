//Setup local Storage
export const DB_NAME = "plantlove";
export const DB_VERSION = 1;
export const PLANT_DB = "plants";
export const SETTINGS_DB = "settings";


export const idbConnect = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION)

        request.onsuccess = ev => {
            resolve(ev.target);
        }

        request.onupgradeneeded = ev => {
            const db = ev.target.result;

            //set up the plant store
            const plantStore = db.createObjectStore(PLANT_DB, {
                autoIncrement: true
            });
            //plantStore.createIndex("Name","displayName",{unique: false});

            //set up the settings store
        }

        request.onerror = ev => {
            reject(`IDB ERROR: ${ev}`);
        }

        request.onblocked = ev => {
            reject(`IDB BLOCKED: ${ev}`)
        }
    });
}

export const idb = idbConnect();

export const idbAddItem = (db, item) => {
    return new Promise((resolve, reject) => {
        const objectStore = idb.transaction(db, "readwrite").objectStore(db);
        const request = objectStore.add(item);

        request.onsuccess = ev => {
            resolve(`Item ${ev.target.result} added to ${db}`);
        }

        request.onerror = ev => {
            reject(`An error occured: ${ev}`)
        }
    });
}

export const idbRemoveItem = (db, key) => {
    return new Promise((resolve, reject) => {
        const objectStore = idb.transaction(db, "readwrite").objectStore(db);
        const request = objectStore.remove(key);

        request.onsuccess = ev => {
            resolve(`Item ${ev.target.result} removed from ${db}`);
        }

        request.onerror = ev => {
            reject(`An error occured: ${ev}`)
        }
    });
}