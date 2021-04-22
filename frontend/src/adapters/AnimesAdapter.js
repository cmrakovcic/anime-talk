class AnimesAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/animes'
  }

  getAnimes() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createAnime(titleValue, creatorValue) {
    const anime = {
      title: titleValue,
      creator: creatorValue,

    };
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(anime)
    })
    .then(res => (res.json()))
    .catch(error => console.log("Error: " + error))
  }
}