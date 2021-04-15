class Anime {

    constructor(animeJSON) {
      // console.log(Anime) // logs Anime class correctly.
      // console.log(animeJSON) // logs Anime object correctly.
      this.id = animeJSON.id
      this.title = animeJSON.title
      this.creator = animeJSON.creator
      this.reviews = animeJSON.reviews
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
          reviewButton.setAttribute("onclick", "openForm()")
          reviewButton.innerHTML = "Add A Thought"
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
            reviewHeader.innerHTML = 'Thoughts:'
            reviewInfo.appendChild(reviewHeader)
  
            const reviews = document.createElement('div')
            reviews.setAttribute("id", `review-${this.id}`)
            reviewInfo.appendChild(reviews)
            reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')
  
            // console.log(this.reviews)
    }
  
    reviewBody(review){
      // console.log(review)
      return `<p>${review.body}</p>`
    }
  
    deleteAnime(id){
      // console.log(`the clicked book is ID: ${id}`)
      return fetch('http://localhost:3000/animes' + '/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
      })
    }
  
    getAndFormatNewReviewForm(event){
      // console.log("getAndFormatNewReviewForm called by ", event.target)
      // console.log(this) // the correct Anime object that was clicked
      // console.log(this.id)  // current anime id of the clicked anime
      event.preventDefault();
      const newReviewForm = document.getElementById('new-review-form')   //get the new review form from main html
      const submitButton = document.createElement("button") // build the add review button
      submitButton.innerHTML = "Add"
      submitButton.id = "review-submit"
      submitButton.type = "submit"
      const buttonDiv = document.getElementById("buttons")
      buttonDiv.appendChild(submitButton)
      submitButton.addEventListener('click', this.submitReviewInputs.bind(this))
    }
  
    submitReviewInputs(event){
      // console.log(this) // the correct anime object that is meant to be submitted
      // console.log(event.target, "line 108")
      event.preventDefault();
      const buttonDiv = document.getElementById("buttons")
      const submitButton = document.getElementById("review-submit")
      const form = document.getElementById('new-review-form')
      // console.log(`this is the ${form} from line 114`)
      // console.log(this.id, "line 114") // still the correct book id.
      const newReviewBody = document.getElementById('new-review-body')
      const reviewBox = document.getElementById(`review-${this.id}`)
      const pDiv = document.createElement('p')
      reviewBox.appendChild(pDiv)
  
      const reviewAddition = {
          anime_id: this.id ,
          body: newReviewBody.value,
      };
      fetch('http://localhost:3000/reviews', {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(reviewAddition)
      })
      .then(res => res.json())
        .then(review => {
        // console.log(review)
        // console.log(review.body)
  
        pDiv.innerHTML = review.body
        newReviewBody.value = ' '
        buttonDiv.removeChild(submitButton)
        closeForm()
      })
    }
}