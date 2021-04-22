# anime-talk
Rails + JavaScript Project - Phase 4


const objUser = [
  fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
    //.then(response => response.json())
    //.then(data => console.log(data))
  })
]