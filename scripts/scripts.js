const best_item = ['best-movie-item1','best-movie-item2','best-movie-item3',
'best-movie-item4','best-movie-item5','best-movie-item6','best-movie-item7']

const western_item = ['western-item1','western-item2','western-item3',
'western-item4','western-item5','western-item6','western-item7']

const musical_item = ['musical-item1','musical-item2','musical-item3',
'musical-item4','musical-item5','musical-item6','musical-item7']

const mystery_item = ['mystery-item1','mystery-item2','mystery-item3',
'mystery-item4','mystery-item5','mystery-item6','mystery-item7']

function create_best_movie(url){
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        /*fetch the absolute best movie*/
        let movie_url = data.results[0].url;
        return fetch(movie_url)
        .then(response => response.json())
        .then(data => {
            /* Create and fill in best movie preview HTML */
            let title_html = document.createElement("h2");
            let description_html = document.createElement("h3");
            let img_html = document.createElement("img");
            title_html.innerHTML = data.title;
            description_html.innerHTML = data.long_description;
            img_html.src = data.image_url;
            img_html.alt = "Best Movie image";
            let reference_node = document.getElementById("myBtn");
            let parent_node = document.getElementById("block1");
            parent_node.insertBefore(title_html,reference_node);
            parent_node.insertBefore(description_html,reference_node);
            document.getElementById("best_movie").appendChild(img_html);
            /* Create and fill in best movie Modal */
            let modal_html1 = document.createElement("div");
            let modal_html2 = document.createElement("div");
            var income = data.worldwide_gross_income;
                if (income == null) {
                    income = "Unknown";
                }
                else {
                    income+='$';
                }
            modal_html1.innerHTML = `${data.title} - ${data.year} - ${data.duration} minutes<br>
                                     ${data.genres}<br>${data.countries}<br><br>
                                     Summary :<br>${data.long_description}<br><br>`;
            modal_html2.innerHTML = `Director :<br>${data.directors}<br><br>
                                     Actors: <br>${data.actors}<br><br>
                                     IMDB : ${data.imdb_score}/10 -
                                     SteamItScore : ${data.avg_vote}/10<br><br>
                                     BoxOffice : ${income}`;
            document.getElementById("the-best-movie-modal1").appendChild(modal_html1);
            document.getElementById("the-best-movie-modal1").appendChild(modal_html2);
            let img_html2 = document.createElement("img");
            img_html2.src = data.image_url;
            img_html2.alt = "Best Movie image modal";
            document.getElementById("the-best-movie-modal2").appendChild(img_html2);


        })
        .catch(error => {
            console.error('Error:', error);
        })
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

function create_categories(url,item_list) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let ii = 0;
        for(ii ; ii<5 ;ii++){
            let movie_url = data.results[ii].url;
            let item_id = item_list[ii];
            let image_alt = 'Image for '+item_id;
            fetch(movie_url)
            .then(response => response.json())
            .then(data => {
                var income = data.worldwide_gross_income;
                if (income == null) {
                    income = "Unknown";
                }
                else {
                    income+='$';
                }
                let img_html = document.createElement("img");
                img_html.setAttribute("class", "product");
                img_html.src = data.image_url;
                img_html.alt = image_alt;
                document.getElementById(item_id).appendChild(img_html)
                /*modal*/
                let modal_div = document.createElement("div");
                let modal_content = document.createElement("div");
                let modal_content1 = document.createElement("div");
                let modal_content2 = document.createElement("div");
                let span_div = document.createElement("span");
                span_div.setAttribute("class", "close");
                span_div.innerHTML = "x";
                modal_content1.setAttribute("class", "modal-content1");
                modal_content1.innerHTML =`${data.title} - ${data.year} -
                                           ${data.duration} minutes<br>
                                           ${data.genres}<br>${data.countries}<br><br>
                                            Summary :<br>${data.long_description}<br><br>
                                            Director :<br>${data.directors}<br><br>
                                            Actors: <br>${data.actors}<br><br>
                                            IMDB : ${data.imdb_score}/10 -
                                            SteamItScore : ${data.avg_vote}/10<br><br>
                                            BoxOffice : ${income}`;
                modal_content2.setAttribute("class", "modal-content2");
                modal_content.setAttribute("class", "modal-content");
                modal_div.setAttribute("class", "modal");
                let img_html2 = document.createElement("img");
                img_html2.src = data.image_url;
                img_html2.alt = 'Image for '+item_id;
                modal_content2.appendChild(img_html2)
                modal_content.appendChild(modal_content1);
                modal_content.appendChild(modal_content2);
                modal_content.appendChild(span_div);
                modal_div.appendChild(modal_content);
                document.getElementById(item_id).appendChild(modal_div);


            })
            .then(()=> {
                const event = new Event('modal');
                document.dispatchEvent(event);
                })

            .catch(error => {
                console.error('Error:', error);
            })
        }
        fetch(data.next)
        .then(response => response.json())
        .then(data=>{
            let ii = 0
            for(ii ; ii<2 ;ii++){
                let movie_url = data.results[ii].url;
                let item_id = item_list[ii+5]
                let image_alt = 'Image for '+item_id;
                fetch(movie_url)
                .then(response => response.json())
                .then(data => {
                    var income = data.worldwide_gross_income;
                    if (income == null) {
                        income = "Unknown";
                    }
                    else {
                        income+='$';
                    }
                    let img_html = document.createElement("img");
                    img_html.setAttribute("class", "product");
                    img_html.src = data.image_url;
                    img_html.alt = image_alt;
                    document.getElementById(item_id).appendChild(img_html)
                    /*modal*/
                    let modal_div = document.createElement("div");
                    let modal_content = document.createElement("div");
                    let modal_content1 = document.createElement("div");
                    let modal_content2 = document.createElement("div");
                    let span_div = document.createElement("span");
                    span_div.setAttribute("class", "close");
                    span_div.innerHTML = "x";
                    modal_content1.setAttribute("class", "modal-content1");
                    modal_content1.innerHTML =`${data.title} - ${data.year} -
                                               ${data.duration} minutes<br>
                                               ${data.genres}<br>${data.countries}<br><br>
                                                Summary :<br>${data.long_description}<br><br>
                                                Director :<br>${data.directors}<br><br>
                                                Actors: <br>${data.actors}<br><br>
                                                IMDB : ${data.imdb_score}/10 -
                                                SteamItScore : ${data.avg_vote}/10<br><br>
                                                BoxOffice : ${income}`;
                    modal_content2.setAttribute("class", "modal-content2");

                    modal_content.setAttribute("class", "modal-content");
                    modal_div.setAttribute("class", "modal");
                    let img_html2 = document.createElement("img");
                    img_html2.src = data.image_url;
                    img_html2.alt = 'Image for '+item_id;
                    modal_content2.appendChild(img_html2)
                    modal_content.appendChild(modal_content1);
                    modal_content.appendChild(modal_content2);
                    modal_content.appendChild(span_div);
                    modal_div.appendChild(modal_content);
                    document.getElementById(item_id).appendChild(modal_div);

                })
            .then(()=> {
                const event = new Event('modal');
                document.dispatchEvent(event);
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })

    })

    .catch(error => {
        console.error('Error:', error);
    })
return 0;
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

