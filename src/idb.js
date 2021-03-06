import theDefaultPlants from "./defaultPlants"

//Setup indexedDB constants
export const DB_NAME = "plantlove";
export const DB_VERSION = 1;
export const PLANT_DB = "plants";
export const SETTINGS_DB = "settings";
export const DEFAULT_PLANTS_DB = "defaultPlants";

const idbConnect = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onsuccess = ev => {
      resolve(ev.target.result);
    };

    request.onupgradeneeded = ev => {
      const db = ev.target.result;

      //set up the plant store
      const plantStore = db.createObjectStore(PLANT_DB, {
        autoIncrement: true
      });
      //plantStore.createIndex("Name","displayName",{unique: false});

      //set up the settings store
      const settingStore = db.createObjectStore(SETTINGS_DB, {
        keyPath: "title"
      });

      const defaultPlants = db.createObjectStore(DEFAULT_PLANTS_DB, {
        keyPath: "botanical_name"
      });

      theDefaultPlants.forEach(element => {
        defaultPlants.add(element);
      });
    };

    request.onerror = ev => {
      reject(`IDB ERROR: ${ev}`);
    };

    request.onblocked = ev => {
      reject(`IDB BLOCKED: ${ev}`);
    };
  });
};

export const idb = idbConnect();

export const idbAddItem = (objstore, item) => {
  return idb.then(idb => {
    return new Promise((resolve, reject) => {
      const objectStore = idb.transaction(objstore, "readwrite").objectStore(objstore);
      const request = objectStore.add(item);

      request.onsuccess = ev => {
        resolve(`Item ${ev.target.result} added to ${objstore}`);
      };

      request.onerror = ev => {
        reject(`An error occured: ${ev}`);
      };
    });
  });
};

export const idbRemoveItem = (objstore, key) => {
  return idb.then(idb => {
    return new Promise((resolve, reject) => {
      const objectStore = idb.transaction(objstore, "readwrite").objectStore(objstore);
      const request = objectStore.remove(key);

      request.onsuccess = ev => {
        resolve(`Item ${ev.target.result} removed from ${objstore}`);
      };

      request.onerror = ev => {
        reject(`An error occured: ${ev}`);
      };
    });
  });
};

export const idbGetAllItems = objstore => {
  return idb.then(idb => {
    console.log(idb);
    return new Promise((resolve, reject) => {
      const objectStore = idb.transaction(objstore, "readonly").objectStore(objstore);

      const data = [];
      const cursor = objectStore.openCursor();

      cursor.onsuccess = e => {
        const cursor = e.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else {
          resolve(data);
        }
      };

      cursor.onerror = e => {
        reject(e);
      };
    });
  });
};

export const idbGetMatchingItems = (objstore, attr, key) => {
  return idb.then(idb => {
    return new Promise((resolve, reject) => {
      const objectStore = idb.transaction(objstore, "read").objectStore(objstore);

      const data = [];
      const cursor = objectStore.openCursor();

      cursor.onsuccess = e => {
        const cursor = e.target.result;
        if (cursor) {
          if (cursor.value[attr] === key) {
            data.push(cursor.value);
          }
          cursor.continue();
        } else {
          resolve(data);
        }
      };

      cursor.onerror = e => {
        reject(e);
      };
    });
  });
};

//Updates an existing item or adds a new one
export const idbPutItem = (objstore, item, key = null) => {
  	return idb.then(idb => {
      return new Promise((resolve, reject) => {
        const objectStore = idb.transaction(objstore, "readwrite").objectStore(objstore);
        const request = key ? objectStore.put(item, key) : objectStore.put(item);
        
        request.onsuccess = (ev) => {
          resolve(`Item has been updated or created ${ev.target.result}`);
        }

        request.onerror = (ev) => {
          reject(`Error: ${ev}`)
        }
      });
    });
}

export const idbObjectStoreAutoInrements = (objstore) => {
  idb.then(idb => {
    return idb.transaction(objstore, "readonly").objectStore.autoIncrement;
  })
}