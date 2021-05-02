const best_item = ['best-movie item1','best-movie item2','best-movie item3',
'best-movie item4','best-movie item5','best-movie item6','best-movie item7']

const western_item = ['western item1','western item2','western item3',
'western item4','western item5','western item6','western item7']

const musical_item = ['musical item1','musical item2','musical item3',
'musical item4','musical item5','musical item6','musical item7']

const mystery_item = ['mystery item1','mystery item2','mystery item3',
'mystery item4','mystery item5','mystery item6','mystery item7']

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

function create_categories(url,item_list) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let ii = 0
        for(ii ; ii<5 ;ii++){
            let movie_url = data.results[ii].url;
            let items = item_list[ii]
            fetch(movie_url)
            .then(response => response.json())
            .then(data => {
                let img_html = document.createElement("img");
                img_html.setAttribute("class", "product");
                img_html.src = data.image_url;
                document.getElementById(items).appendChild(img_html)
            })
        }
        fetch(data.next)
        .then(response => response.json())
        .then(data=>{
            let ii = 0
            for(ii ; ii<2 ;ii++){
                let movie_url = data.results[ii].url;
                let items = item_list[ii+5]
                fetch(movie_url)
                .then(response => response.json())
                .then(data => {
                    let img_html = document.createElement("img");
                    img_html.setAttribute("class", "product");
                    img_html.src = data.image_url;
                    document.getElementById(items).appendChild(img_html)
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
    create_categories(best_url,best_item)
    create_categories(western_url,western_item)
    create_categories(musical_url,musical_item)
    create_categories(mystery_url,mystery_item)
}

app()