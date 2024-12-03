// Comprueba si hay datos en localStorage
const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

// Guarda una propiedad y su valor en localStorage
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

// Borra una propiedad del localStorage
const remove = (key) => {
  localStorage.removeItem(key);
};

// Limpia todo el localStorage
const clear = () => {
  localStorage.clear();
};

// Objeto temporal para exportarlo
const objectToExport = {
  get: get,
  set: set,
  remove: remove,
  clear: clear,
};

// Exporto el objeto para que pueda ser usado desde App
export default objectToExport;
