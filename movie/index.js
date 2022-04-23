//const url = ``http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=c1fcc466``;

// const link = `http://www.omdbapi.com/?i=movie&apikey=c1fcc466`
// const link2 = `http://www.omdbapi.com/?apikey=c1fcc466&t`



function showMovie(){
    let movie = document.querySelector("#name").value;
    let year = document.querySelector("#year").value;
    const link = `https://www.omdbapi.com/?t=${movie}&y=${year}&apikey=c1fcc466`;
    fetch(link)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        
        console.log("res",res)
        append(res)
    })
    .catch(function(err){
     // console.log("error",err)
        document.querySelector("#container").innerHTML= null;

        let image = document.createElement("img");
        image.src = "https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
         let heading = document.createElement("h1");
         heading.innerText = "invalid movie name Or Year"
        
         document.querySelector("#container").append(image,heading)

     });

}

function append(data){
    document.querySelector("#container").innerHTML= null;
    let boxd = document.createElement("div");

    let img = document.createElement("img");
    img.src = data.Poster
    let name = document.createElement("p");
    name.innerText ="Title:"+ data.Title; 
    let year = document.createElement("p")
    year.innerText ="Release Date:"+ data.Released;
    let rating = document.createElement("p")
    rating.innerText ="Ratings:"+ data.Ratings[0].Value;
    let ratingcheck = data.imdbRating;
    
    console.log(data)
       if(ratingcheck>=8.5){
           let recomend = document.createElement("h3");
           recomend.setAttribute("id","recomend");

           recomend.innerText = "Recommended"
           
           boxd.append(recomend,name,rating,year)
          
          
       }
        
    boxd.append(name,rating,year);
      document.querySelector("#container").append(img,boxd)

    
}
