const movieList = document.querySelectorAll(".movie-list")


async function searchForm(query){
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1d21809e38135e1a123a0e36f69395e2&query=${query}&language=ko-KR`);
    const {results} = await result.json();
    results.forEach((item) => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const anchor = document.createElement("a");
        h3.innerHTML = item.title;
        span.innerHTML = item.release_date;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        anchor.href = `detail.html?id=${item.id}&cate=movie`;
        li.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        movieList[0].appendChild(li);
    });
}

async function searchTV(query){
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=1d21809e38135e1a123a0e36f69395e2&query=${query}&language=en-US&page=1&include_adult=false`);
    const {results} = await response.json();
    console.log(results);
    results.forEach((item) => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const anchor = document.createElement("a");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        h3.innerHTML = item.name;
        span.innerHTML = item.first_air_date;
        anchor.href = `detail.html?id=${item.id}&cate=tv`;
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[1].appendChild(li);
    });
}

const term = window.location.search.slice(6);
searchTV(term);
searchForm(term);

