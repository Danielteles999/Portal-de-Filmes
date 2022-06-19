const API_KEY = '2f211b5524f3b0f0354d0bc4c12a1fa2';
const baseImagem = 'https://api.themoviedb.org/3';

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML dos filmes
    let dados = JSON.parse(this.responseText);
        let filmes = dados;
        let data = new Date (filmes.release_date);


        imagem = 'https://image.tmdb.org/t/p/w500' + filmes.poster_path;
        texto = texto +`

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div id="tela">
                <div>
                    <img id="imagemCard" src="${imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p id="dataFilme"> Data do Lançamento: ${data.toLocaleDateString ()}</p>
                    <p> Avaliação: <span class="badge rounded-pill bg-primary"><b>${filmes.vote_average}</b></span></p>
                    <a id="link" href="" class="btn btn-primary">${filmes.poster_path}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-8 col-lg-8">
        <div id="tela">
            <div>
                <div>
                <h1 id="titulo" class="card-title">${filmes.original_title}</h1>
                <p id="homeage"> Site: ${filmes.homepage}</p>
                <p id="overview">Overview: ${filmes.overview}</p>
                <p id="VotosPositivos">Votos positivos: ${filmes.vote_count}</p>
                </div>
            </div>
        </div>
    </div>
    `;


    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
};


let mostrar = function mostrarFilmePopular () {

    

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
    xhr.send ();
};

window.onload = function () { 
    mostrar();
};
