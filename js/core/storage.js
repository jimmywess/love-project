(function () {
  const storageAvailable = (() => {
    try {
      const testKey = "__test__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (_) {
      return false;
    }
  })();

  const get = (key) => {
    if (!storageAvailable) return null;
    try {
      const value = localStorage.getItem(key);
      return value === "true" ? true : value === "false" ? false : value;
    } catch (_) {
      return null;
    }
  };

  const set = (key, value) => {
    if (!storageAvailable) return;
    try {
      localStorage.setItem(key, String(value));
    } catch (_) {}
  };

  const remove = (key) => {
    if (!storageAvailable) return;
    try {
      localStorage.removeItem(key);
    } catch (_) {}
  };

  window.storage = {
    get,
    set,
    remove
  };
})();
