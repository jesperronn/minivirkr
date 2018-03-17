
const api = {
  searchCvr(term) {
    return new Promise((resolve, reject) => {
      fetch(`http://virkr.dk/cvr/searchVirkr/${term}`)
        .then(response => {
          if (response.ok) {
            resolve(response.json())
          } else {
            reject(Error(response.statusText))
          }
        },
          error => {
            reject(Error(error.message))
          }
        )
    })

  }
}


export default api;
