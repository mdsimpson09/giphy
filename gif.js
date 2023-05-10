$("form").on("submit", async function(evt) {
    evt.preventDefault();
});

const giphyForm = document.getElementById('giphyForm');
const container = document.getElementById('container');
// form.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       document.getElementById("btn").click();
//     }});
    
function sendApiRequest(){
    let userInput= document.getElementById("input").value
    console.log(userInput)
   
    const giphyApiKey= "SSvhhLvFDjauVcBemVNJ86xiNARUDMYg"
    const giphyApiURL= `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;
    
    fetch(giphyApiURL).then(function(data){
        return data.json();
    })
    .then(function(json){
      console.log(json.data[0].images.fixed_height.url);
      let imgPath=json.data[0].images.fixed_height.url
      let img = document.createElement('img');
      img.setAttribute('src', imgPath);
      document.body.appendChild(img)
    })};

//     const memeDiv = document.createElement('div');
//   memeDiv.classList.add('meme');
//   memeDiv.innerHTML = `
//     <img src="${imageLink}">
//     <p class="top-text">${topText}</p>
//     <p class="bottom-text">${bottomText}</p>
//     <button class="remove-button">Remove</button>
//   `;
//   memeContainer.appendChild(memeDiv);

//   memeForm.reset();
// });

 container.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove')) {
     event.target.parentNode.remove();
    }
    });

// const gifContainer = document.createElement('p');
// gifContainer.classList.add('container');

// let imgPar = document.createElement('img');
// imgPar.setAttribute('src', imgPath);
// gifContainer.append(imgPar);
