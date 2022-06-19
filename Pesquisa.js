
const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML dos filmes
    let dados = JSON.parse(this.responseText);

    const value = decodeURI(window.location.href.split('?q=')[1]);
    url: TMDB_ENDPOINT_BASE + `/movie/${value}?language=pt-BR`

    for (i=0; i< dados.results.length; i++) {
        let filmes = dados.results[i];
        let data = new Date (filmes.release_date);


        imagem = 'https://image.tmdb.org/t/p/w500' + filmes.poster_path;
        texto = texto +`
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <div id="tela">
                <div class="card" style="width: 18rem;">
                    <img id="imagemCard" src="${imagem}" class="card-img-top" alt="${filmes.original_title}">
                    <div class="card-body">
                    <h5 id="titulo" class="card-title">${filmes.original_title}</h5>
                    <p id="dataFilme"> Data do Lançamento: ${data.toLocaleDateString ()}</p>
                    <p> Avaliação: <span class="badge rounded-pill bg-primary"><b>${filmes.vote_average}</b></span></p>
                    <a id="link" href="" class="btn btn-primary">${filmes.poster_path}</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
};


let pesquisar = function PesquisarFilme () {

    let query = document.getElementById('txtPesquisa').value;
    const valueEncode = encodeURI(value);
    const link = window.location.href = '../pages/pesquisa.html?q=' + valueEncode;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/${query}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
    xhr.send ();
};

document.getElementById('botaoPesquisa').onclick = function () { 
    mostrar();
};
