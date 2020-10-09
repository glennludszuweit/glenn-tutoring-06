class LS {
  SET(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  GET(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  CLEAR(key) {
    return localStorage.removeItem(key)
  }
}

export default new LS(); 