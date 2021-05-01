function create_best_movie(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        /*fetch the absolute best movie*/
        let movie_url = data.results[0].url;
        fetch(movie_url)
        .then(response => response.json())
        .then(data => {
            /* Create and fill in best movie preview HTML */
            let title_html = document.createElement("h2");
            let description_html = document.createElement("h3");
            let img_html = document.createElement("img");
            title_html.innerHTML = data.title;
            description_html.innerHTML = data.description;
            img_html.src = data.image_url;
            img_html.alt = "Best Movie image";
            let reference_node = document.getElementById("myBtn");
            let parent_node = document.getElementById("block1");
            parent_node.insertBefore(title_html,reference_node);
            parent_node.insertBefore(description_html,reference_node);
            document.getElementById("best_movie").appendChild(img_html);
            /* Create and fill in best movie Modal */
            let modal_html1 = document.createElement("h4");
            let modal_html2 = document.createElement("h4");
            modal_html1.innerHTML = `${data.title} - ${data.year} - ${data.duration} minutes<br>
                                     ${data.genres}<br>${data.countries}<br><br>
                                     Summary :<br>${data.description}`;
            modal_html2.innerHTML = `Director :<br>${data.directors}<br><br>
                                     Actors: <br>${data.actors}<br><br>
                                     IMDB : ${data.imdb_score}/10 -
                                     SteamItScore : ${data.avg_vote}/10<br><br>
                                     BoxOffice : ${data.worldwide_gross_income}`
            document.getElementById("best_movie_modal1").appendChild(modal_html1);
            document.getElementById("best_movie_modal1").appendChild(modal_html2);
            let img_html2 = document.createElement("img");
            img_html2.src = data.image_url;
            img_html2.alt = "Best Movie image modal";
            document.getElementById("best_movie_modal2").appendChild(img_html2);


    })
})
}

function create_categories(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let ii=1 ; ii<5 ;ii++){
            let movie_url = data.results[ii].url;
            fetch(movie_url)
            .then(response => response.json())
            .then(data => {
                let li_html = document.createElement("li");
                let div_html = document.createElement("div");
                li_html.setAttribute("class", "product-list__item");
                div_html.setAttribute("data-slide", `${ii}`);
                div_html.setAttribute("class", "product");
                div_html.style.background = 'url('+data.image_url+')';
                div_html.style.backgroundRepeat = "no-repeat";
                div_html.style.backgroundSize = "auto 400px";
                div_html.style.backgroundPosition = "center";
                li_html.appendChild(div_html);
                document.getElementById('carousel1').appendChild(li_html);
            })
        }
        fetch(data.next)
        .then(response => response.json())
        .then(data=>{
            for(let ii=0 ; ii<3 ;ii++){
                let movie_url = data.results[ii].url;
                fetch(movie_url)
                .then(response => response.json())
                .then(data => {
                    let li_html = document.createElement("li");
                    let div_html = document.createElement("div");
                    li_html.setAttribute("class", "product-list__item");
                    let value = ii+5;
                    div_html.setAttribute("data-slide", `${value}`);
                    div_html.setAttribute("class", "product");
                    div_html.style.background = 'url('+data.image_url+')';
                    div_html.style.backgroundRepeat = "no-repeat";
                    div_html.style.backgroundSize = "auto 400px";
                    div_html.style.backgroundPosition = "center";
                    li_html.appendChild(div_html);
                    document.getElementById('carousel1').appendChild(li_html);
                })
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
}

app()

