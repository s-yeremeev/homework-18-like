export const setLocalStorage = function (key, arr) {
    try {
      const array = JSON.stringify(arr)
      localStorage.setItem(key, array)
    } catch (err) {
      console.error(err.message)
    }
  }
  
  export const getLocalStorage = function (key) {
    try {
      const data = localStorage.getItem(key)
      const pars = data && JSON.parse(data) || []
      return pars
    } catch (err) {
      console.error(err.message)
    }
  }