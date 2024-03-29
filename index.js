const API_KEY = 'api_key=794b2176f7745a2a1ad602628d88a63c';
const BASE_URL = 'https://api.themoviedb.org/3/'; 
const API_URL = BASE_URL + 'trending/movie/day?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const search_URL = BASE_URL + '/search/movie?' + API_KEY;
const main = document.getElementById('main');
const search = document.getElementById('search');

getMovies(API_URL);
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data=>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML= '';

    data.forEach(movie => {
        const {original_title , poster_path, vote_average, overview} = movie;
        const movieEle = document.createElement('div');
        movieEle.classList.add('movie');
        movieEle.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${original_title}">
            <div class="info">
                <h6>${original_title}</h6>
                <h7 class="rating"><i class="fa-regular fa-star"></i> ${vote_average}</h7>
            </div>
            <div class="overview">
                ${overview};
            </div>
        `
        main.appendChild(movieEle);
    })
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const searchterm = search.value;
    if(searchterm){
        getMovies(search_URL + '&query=' + searchterm);
    }else{
        getMovies(API_URL);
    }
})
