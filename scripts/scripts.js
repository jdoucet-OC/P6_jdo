function create_best_movie(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let movie_url = data.results[0].url;
        fetch(movie_url)
        .then(response => response.json())
        .then(data => {
            let img_url = data.image_url;
            let title = data.title;
            let description = data.description;
            let img_html = document.createElement("img");
            img_html.src = img_url;
            img_html.alt = "Best movie image";
            console.log(title)
            document.getElementById("best_movie").appendChild(img_html);
            document.getElementById("best_title").innerHTML = title;
            document.getElementById("best_desc").innerHTML = description;
    })
})
}

function create_categories(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let ii=0 ; ii<5 ;ii++){
            let movie = data.results[ii];
            let img_url = movie.image_url;
            let title = movie.title;
        }
        fetch(data.next)
        .then(response => response.json())
        .then(data=>{
            for(let ii=0 ; ii<2 ;ii++){
                let movie = data.results[ii];
                let img_url = movie.image_url;
                let title = movie.title;
            }
        })
    })
}

function app() {
    let western_url = "http://localhost:8000/api/v1/titles/?genre=Western&sort_by=-imdb_score";
    let musical_url = "http://localhost:8000/api/v1/titles/?genre=Musical&sort_by=-imdb_score";
    let mystery_url = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score";
    let best_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

    create_best_movie(best_url)
    create_categories(best_url)
    create_categories(western_url)
    create_categories(musical_url)
    create_categories(mystery_url)
}

app()
