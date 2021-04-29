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

const western_url = "http://localhost:8000/api/v1/titles/?genre=Western&sort_by=-imdb_score";
const musical_url = "http://localhost:8000/api/v1/titles/?genre=Musical&sort_by=-imdb_score";
const mystery_url = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score";
const best_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

get_best_movie(best_url)

