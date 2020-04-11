export function loadStore() {
  try {
    const state = localStorage.getItem('store');
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
}

export function saveStore(store) {
  try {
    const stringifiedStore = JSON.stringify(store);
    localStorage.setItem('store', stringifiedStore);
  } catch (error) {
    // noop
  }
}

export function saveJWTStore(store) {
    try {
        const stringifiedStore = JSON.stringify(store);
        localStorage.setItem('jwt', stringifiedStore);
    } catch (error) {
        // noop
    }
}
