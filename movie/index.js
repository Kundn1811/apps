let link = 'http://www.omdbapi.com/?plot=full&apikey=c1fcc466&s'
    let movies = document.getElementById("movie")
    async function searchMovies(){
        
      try{
          
          const quer = document.getElementById("query").value;
   
          let res = await fetch(`https://omdbapi.com/?apikey=c1fcc466&s=${quer}`);
   
          let data = await res.json();
          //  console.log("data:",data);
           return data;
           appendMovies(data.Search)
      }catch(err){
          console.log("error",err);
      }
  
  }
  function appendMovies(data){
          if(data === undefined){
              return false
          }
          console.log(data)
          movies.innerHTML = null;
          movies.style.display = "block"
        data.forEach(function(el){
  
           let p = document.createElement("p")
           p.innerText = el.Title
           p.addEventListener("click",function(){
               document.getElementById("query").value = p.innerText;
               showDetails(el);
               movies.style.display = "none";
           })
           movies.append(p)
        })
  
      }
  
      function showDetails(data){
        document.getElementById("container").innerHTML = null;
          let box = document.createElement("div");
           box.setAttribute("id","box");
          let image = document.createElement("img")
          image.src = data.Poster;
          let box2 = document.createElement("div");
          let title = document.createElement("h3");
          title.innerText = data.Title;
          let year = document.createElement("p");
          year.innerText = `Release-Year:- ${data.Year}`;
          let  ratings = document.createElement("p");
        
          
         fetch(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=c1fcc466`).then((res)=>{
           return res.json()
         }).then((res)=>{
            ratings.innerText ="Imdb-Rating:- "+ res.imdbRating;
          // console.log(res.imdbRating)
         })

         //console.log(data.imdbID)
         box2.append(title,year,ratings)
         box.append(image,box2);
         document.getElementById("container").append(box)

      }
  
  async function main(){
      let data =  await searchMovies()
     appendMovies(data.Search)
  }
  
  // debouncing
  let id
  function debounce(func,delay){
      
      if(id){
          clearTimeout(id);
      }
  
  
   id  = setTimeout(function(){
           func()
       },delay)
  }
  function goTo(){
    window.location.href = "trending.html"
  }

  
