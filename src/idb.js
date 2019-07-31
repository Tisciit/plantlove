//Setup indexedDB constants
export const DB_NAME = "plantlove";
export const DB_VERSION = 1;
export const PLANT_DB = "plants";
export const SETTINGS_DB = "settings";
export const DEFAULT_PLANTS_DB = "defaultPlants"

export const idbConnect = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onsuccess = ev => {
      resolve(ev.target);
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

      const defaultPlants = db.createObjectStore(DEFAULT_PLANTS_DB, {autoIncrement: true});
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

export const idbAddItem = (db, item) => {
  return new Promise((resolve, reject) => {
    const objectStore = idb.transaction(db, "readwrite").objectStore(db);
    const request = objectStore.add(item);

    request.onsuccess = ev => {
      resolve(`Item ${ev.target.result} added to ${db}`);
    };

    request.onerror = ev => {
      reject(`An error occured: ${ev}`);
    };
  });
};

export const idbRemoveItem = (db, key) => {
  return new Promise((resolve, reject) => {
    const objectStore = idb.transaction(db, "readwrite").objectStore(db);
    const request = objectStore.remove(key);

    request.onsuccess = ev => {
      resolve(`Item ${ev.target.result} removed from ${db}`);
    };

    request.onerror = ev => {
      reject(`An error occured: ${ev}`);
    };
  });
};

export const idbGetAllItems = db => {
  return new Promise((resolve, reject) => {
    const objectStore = idb.transaction(db, "read").objectStore(db);

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
};

export const idbGetMatchingItems = (db, attr, key) => {
  return new Promise((resolve, reject) => {
    const objectStore = idb.transaction(db, "read").objectStore(db);

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
};