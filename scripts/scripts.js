const urlmovie = "http://localhost:8000/api/v1/titles/"
const urlgenre = "http://localhost:8000/api/v1/genres/"
const urlimdb = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

function best_movie(){
    fetch(urlimdb)
        .then(response => response.json())
        .then(data => {
            movie = data.results[0];
            img = movie.image_url;
            var imghtml = document.createElement("img");
            imghtml.setAttribute("src", img);
            imghtml.setAttribute("alt", "The best imdb Movie");
            imghtml.setAttribute("class", "center")
            document.getElementById("bestmovie").appendChild(imghtml);
        })
        }
best_movie()