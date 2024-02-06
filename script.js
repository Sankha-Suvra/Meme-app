let meme = document.getElementById("meme");
let title = document.getElementById("title");
let btn = document.getElementById("btn");

//api url
let url = "https://meme-api.com/gimme/";

// array of subreddits
let subreddits = ["Catmemes", "memes", "dogmemes", "me_irl"]


//function to get random memes
let getMeme = ()=>{
    //get a random subreddit from subreddit array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

    //fetch data from the api
    fetch(url + randomSubreddit)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let memeImg = new Image();

        //Display meme image and title only after image loads
        memeImg.onload = () => {
            meme.src = data.url; // sending the meme directly to the img section of HTML which has id "meme"
            title.innerHTML = data.title
        };
        memeImg.src = data.url; // Preloading the Meme using Image() object before displaying it
    })
}

btn.addEventListener("click", getMeme)
window.addEventListener("load", getMeme)