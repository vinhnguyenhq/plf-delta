import Storage from "localforage";

function fallbackStorage() {
  return Storage;
}

function InitStorage() {
  let storage = null;

  if (typeof window !== "undefined") {
    const KEY = `storage_supported_${Math.random()}`;

    try {
      window.localStorage.setItem(KEY, "true");

      if (window.localStorage.getItem(KEY) !== "true") {
        throw new Error("Unable to use `window.localStorage`.");
      }

      window.localStorage.removeItem(KEY);
      storage = window.localStorage;
    } catch (err) {
      storage = fallbackStorage();
    }
  } else {
    storage = fallbackStorage();
  }

  return storage;
}

export default InitStorage();
