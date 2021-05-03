class AnimesAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/animes'
  }

  async getAnimes() {
    const res = await fetch(this.baseUrl);
    return await res.json();
  }

  async createAnime(titleValue, creatorValue) {
    const anime = {
      title: titleValue,
      creator: creatorValue,

    };
    try {
      const res = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(anime)
      });
      return await (res.json());
    } catch (error) {
      return console.log("Error: " + error);
    }
  }
}