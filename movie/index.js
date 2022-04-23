//const url = ``http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=c1fcc466``;

// const link = `http://www.omdbapi.com/?i=movie&apikey=c1fcc466`
// const link2 = `http://www.omdbapi.com/?apikey=c1fcc466&t`



function showMovie(){
    let movie = document.querySelector("#name").value;
    let year = document.querySelector("#year").value;
    const link = `http://www.omdbapi.com/?t=${movie}&y=${year}&apikey=c1fcc466`;
    fetch(link)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        
        console.log("res",res)
        append(res)
    })
    .catch(function(err){
       console.log("err my",err)
    });

}

function append(data){
    document.querySelector("#container").innerHTML= null;
      let img = document.createElement("img");
      img.src = data.Poster
      let name = document.createElement("p");
      name.innerText ="Title:"+ data.Title; 
     let year = document.createElement("p")
      year.innerText ="Release Date:"+ data.Released;
      let rating = document.createElement("p")
      rating.innerText ="Ratings:"+ data.Ratings[0].Value;
      let boxd = document.createElement("div")
      boxd.append(name,rating,year)
      document.querySelector("#container").append(img,boxd)

    
}