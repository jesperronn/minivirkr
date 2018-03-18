export default async function(term) {
  let response = await fetch(`http://virkr.dk/cvr/searchVirkr/${term}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw Error(response.statusText)
  }
}
