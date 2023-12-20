getdata = () =>{
let input=document.getElementById("input");
let api = "https://omdbapi.com/?apikey=ed708b24&t=";

api = "https://omdbapi.com/?apikey=ed708b24&t="+input.value

fetch(api).then(format = (data)=>{
    return data.json();
}).then(data =(get)=>{
    let view = document.getElementById("movie-box");
    let title =document.getElementById("title");
    let date =document.getElementById("date");
    let genre =document.getElementById("genre");
    let actors =document.getElementById("actors");
    let director =document.getElementById("director");
    let lang =document.getElementById("lang");
    let rating =document.getElementById("rating");
    let awards =document.getElementById("awards");
    let plot =document.getElementById("plot");
    let collection =document.getElementById("collection");
    let poster =document.getElementById("poster");
    let before =document.getElementById("search-before");
    
    before.style.display="none"
    view.style.display="flex"
    title.innerText=get.Title;
    plot.innerText=get.Plot;
    date.innerText=get.Released;
    genre.innerText=get.Genre;
    actors.innerText=get.Actors;
    director.innerText=get.Director;
    lang.innerText=get.Language;
    rating.innerText=get.imdbRating;
    awards.innerText=get.Awards;
    collection.innerText=get.BoxOffice;
    poster.src=get.Poster
    
    console.log(get);
})






}