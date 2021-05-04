class Animes {
  constructor() {
    this.animes = []
    this.adapter = new AnimesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadAnimes()
  }

  initBindingsAndEventListeners() {
    this.newAnimeForm = document.getElementById('new-anime-form')
    this.newAnimeTitle = document.getElementById('new-anime-title')
    this.newAnimeCreator = document.getElementById('new-anime-creator')
    this.newAnimeForm.addEventListener('submit', this.createAnime.bind(this))
    //anytime the anime is submitted, bind the Animes class/object as this - otherwise the this will be the form itself
  }

  createAnime(event) {
    event.preventDefault(); //pass in event object & prevents the default of page refresh on form submit
    const titleValue = this.newAnimeTitle.value;
    const creatorValue = this.newAnimeCreator.value

    this.adapter.createAnime(titleValue,creatorValue)
      .then(anime => {
      const newAnime = new Anime(anime)
      this.animes.push(newAnime)
      this.newAnimeTitle.value = ' '
      this.newAnimeCreator.value = ' '
      newAnime.renderAnimeBlock()
      })
  }

  fetchAndLoadAnimes() {
    this.adapter
      .getAnimes()
      .then(animes => {
      animes.forEach(anime => this.animes.push(new Anime(anime)))
      this.renderAnimes()
      }) 
  }

  renderAnimes() {
  this.animes.map(anime => anime.renderAnimeBlock())
  }
}