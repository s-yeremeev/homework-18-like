export const getLikeFetch = async function () {
    try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "GET"
            })  
            const res = await data.json()
            return res.slice(0, 10)
    } catch (err) {
            console.error(err.message)
    }
  }