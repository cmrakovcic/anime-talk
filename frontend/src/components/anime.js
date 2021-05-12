class Anime {
  constructor(anime) {
    this.id = anime.id
    this.title = anime.title
    this.creator = anime.creator
    this.reviews = anime.reviews
  }
  
  renderAnimeBlock() {
    const animesContainer = document.getElementById('animes-content')
    
    const animeBlock = document.createElement('div')
    animeBlock.className = "anime-container"
    animesContainer.appendChild(animeBlock)

    const deleteButton = document.createElement("BUTTON")
    deleteButton.setAttribute("id", `delete-button-${this.id}`)
    deleteButton.innerHTML = "Delete Anime"
    animeBlock.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
      animeBlock.remove()
      this.deleteAnime(`${this.id}`)
    })

    const reviewButton = document.createElement("BUTTON")
    reviewButton.setAttribute("id", `review-button-${this.id}`)
    reviewButton.setAttribute("onClick", "openForm()")
    reviewButton.innerHTML = "Add A Review"
    animeBlock.appendChild(reviewButton)

    reviewButton.addEventListener('click', this.getAndFormatNewReviewForm.bind(this))

    const animeInfo = document.createElement('div')
    animeInfo.className = "anime-info"
    animeBlock.appendChild(animeInfo)

    const title = document.createElement('h3')
    title.setAttribute("class", 'anime-title')
    title.innerHTML = this.title
    animeInfo.appendChild(title)

    const creator = document.createElement('h3')
    creator.setAttribute("class", 'anime-creator')
    creator.innerHTML = `by: ${this.creator}`
    animeInfo.appendChild(creator)

    const reviewInfo = document.createElement('div')
    reviewInfo.className = "review-info"
    animeBlock.appendChild(reviewInfo)

    const reviewHeader = document.createElement('h4')
    reviewHeader.setAttribute("class", 'review-header')
    reviewHeader.innerHTML = 'Reviews:'
    reviewInfo.appendChild(reviewHeader)

    const reviews = document.createElement('div')
    reviews.setAttribute("id", `review-${this.id}`)
    reviewInfo.appendChild(reviews)
    reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')
  }

  reviewBody(review){
    return `<p>${review.body}</p>`
  }

  deleteAnime(id){
    fetch('http://localhost:3000/animes' + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      }
    })
  }

  getAndFormatNewReviewForm(event){
    event.preventDefault();
    const submitButton = document.createElement("button")
    submitButton.innerHTML = "Add"
    submitButton.id = "review-submit"
    submitButton.type = "submit"
    const buttonDiv = document.getElementById("buttons")
    buttonDiv.appendChild(submitButton)
    submitButton.addEventListener('click', this.submitReviewInputs.bind(this))
  }

  submitReviewInputs(event){
    event.preventDefault();
    const buttonDiv = document.getElementById("buttons")
    const submitButton = document.getElementById("review-submit")
    const newReviewBody = document.getElementById('new-review-body')
    const reviewBox = document.getElementById(`review-${this.id}`)
    const pDiv = document.createElement('p')
    reviewBox.appendChild(pDiv)

    const reviewAddition = {
        anime_id: this.id ,
        body: newReviewBody.value,
    };
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(reviewAddition)
    })
    .then(res => res.json())
      .then(review => {
      pDiv.innerText = review.body
      newReviewBody.value = ' '
      buttonDiv.removeChild(submitButton)
      closeForm()
    })
  }
}