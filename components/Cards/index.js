// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
    }) 
    

// function Articles (item){
//     const cardCont = document.createElement('div');
//     const cardTitle = document.createElement('div');
//     const cardAuth = document.createElement('div');
//     const cardImgCon = document.createElement('div');
//     const cardImg = document.createElement('img');
//     const cardName = document.createElement('span');

//     cardCont.classList.add('card');
//     cardTitle.classList.add('headline');
//     cardAuth.classList.add('author');
//     cardImgCon.classList.add('img-container');

//     cardTitle.textContent = item.headline
//     cardImg.src = item.authorPhoto
//     cardName.textContent = item.authorName

//     cardCont.append(cardTitle, cardAuth,)
//     cardAuth.append(cardImgCon, cardName)
//     cardImgCon.append(cardImg)


//     return cardCont
// }

// const cardEntry = document.querySelector('.cards-container');
// cardEntry.append(Articles())
