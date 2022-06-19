const API_KEY = '2f211b5524f3b0f0354d0bc4c12a1fa2';
const baseImagem = 'https://api.themoviedb.org/3';

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML dos filmes
    let dados = JSON.parse(this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filmes = dados.results[i];
        let data = new Date (filmes.release_date);

        imagem = 'https://image.tmdb.org/t/p/w500' + filmes.poster_path;
        texto = texto +`
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div id="tela">
                <div class="card" style="width: 18rem;">
                    <img id="imagemCard" src="${imagem}" class="card-img-top" alt="${filmes.original_title}">
                    <div class="card-body">
                    <h5 id="titulo" class="card-title">${filmes.original_title}</h5>
                    <p id="dataFilme"> Data do Lançamento: ${data.toLocaleDateString ()}</p>
                    <p id="overview">${filmes.overview}</p>
                    <p> Avaliação: <span class="badge rounded-pill bg-primary"><b>${filmes.vote_average}</b></span></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
};


let mostrar = function mostrarFilmePopular () {

    /*alert("hello  moto");*/

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    xhr.send ();
};

window.onload = function () { 
    mostrar();
};
