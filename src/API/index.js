export default async function(term) {
  let response = await fetch(`http://virkr.dk/cvr/searchVirkr/${term}`)
  return await response.json()
}
