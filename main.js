// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
    
    let likeGlyphs = document.querySelectorAll('.like-glyph')

    likeGlyphs.forEach(heartGlyph => {
        heartGlyph.addEventListener('click', toggleLike )
    });
})

function toggleLike(e) {
    const heart = e.target

    mimicServerCall()
    .then((resp) => {
        if (heart.classList.contains('activated-heart')) {
            heart.classList.remove('activated-heart')
        } else {
            heart.setAttribute('class', 'activated-heart')
        }
       
    })
    .catch((error)=> {
        let errorModal = document.getElementById('modal')
        errorModal.classList.remove('hidden')
        errorModal.innerHTML = error
        setTimeout(() => errorModal.setAttribute('class', 'hidden'), 5000)
    })
   
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
