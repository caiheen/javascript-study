const movieList = document.querySelectorAll(".movie-list");

async function getpapular(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();

    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const anchor = document.createElement("a");
        li.classList.add("movie-card");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        h3.innerHTML = item.title;
        span.innerHTML = item.release_date;
        anchor.href = `detail.html?id=${item.id}&cate=movie`
        li.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        movieList[0].appendChild(li);
    });
    console.log(results);
}
getpapular();

async function getNowplaying(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();

    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const anchor = document.createElement("a");
        li.classList.add("movie-card");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        h3.innerHTML = item.title;
        span.innerHTML = item.release_date;
        anchor.href = `detail.html?id=${item.id}&cate=movie`
        li.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        movieList[1].appendChild(li);
    });
}
getNowplaying();

async function getupcoming(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();

    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const anchor = document.createElement("a");
        li.classList.add("movie-card");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        h3.innerHTML = item.title;
        span.innerHTML = item.release_date;
        anchor.href = `detail.html?id=${item.id}&cate=movie`
        li.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        movieList[2].appendChild(li);
    });
}
getupcoming();

async function topRated(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();
    results.forEach(item => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const anchor = document.createElement("a");

        li.classList.add("movie-card");
        h3.innerHTML = item.title;
        span.innerHTML = item.release_date;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        anchor.href = `detail.html?id=${item.id}&cate=movie`;
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[3].appendChild(li);
    });
}
topRated();

async function tvTopRated(){
    const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=1d21809e38135e1a123a0e36f69395e2&language=en-US&page=1`);
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
        li.classList.add("movie-card")
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[4].appendChild(li);
    });
}
tvTopRated();

async function tvPopular(){
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=1d21809e38135e1a123a0e36f69395e2&language=en-US&page=1`);
    const {results} = await response.json();
    console.log(results);
    results.forEach((item) => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const anchor = document.createElement("a");
        li.classList.add("movie-card");
        h3.innerHTML = item.name;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        span.innerHTML = item.first_air_date;
        anchor.href = `detail.html?id=${item.id}&cate=tv`;
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[5].appendChild(li);
    });
}
tvPopular();