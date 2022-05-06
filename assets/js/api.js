function chamarAPI() {   
  const apiURL = "https://api.axietech.info/cards/v3"

  return fetch(apiURL)
      .then(response => response.json())
      .catch(err => console.error(err))
}