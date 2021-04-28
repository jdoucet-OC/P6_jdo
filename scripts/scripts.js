function movie_modal(movie){
    // code here
}

function get_best_movie(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movie = data.results[0];
            let img_url = movie.image_url;
            let title = movie.title;
            let description = movie.description;
            let img_html = document.createElement("img");
            img_html.src = img_url
            img_html.alt = "Best movie image"
            document.getElementById("best_movie").appendChild(img_html)
            document.getElementById("best_title").innerHTML = title;
        })
        }

const urlmovie = "http://localhost:8000/api/v1/titles/"
const urlgenre = "http://localhost:8000/api/v1/genres/"
const urlimdb = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

get_best_movie(urlimdb)

