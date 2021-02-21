const movieList = document.querySelectorAll(".movie-list");

async function getPapular(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();
    // console.log(results);
    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const anchor = document.createElement("a");
        const span = document.createElement("span");

        li.classList.add("movie-card");
        h3.classList.add("movie-title");
        span.classList.add("upcoming-day");
        h3.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
        span.innerHTML = item.release_date;
        anchor.href = `detail.html?id=${item.id}`
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[0].appendChild(li);
    });
}
getPapular();

async function getNow(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();
    // console.log(results);

    results.forEach(item => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const anchor = document.createElement("a");

        li.classList.add("movie-card");
        h3.classList.add("movie-title");
        span.classList.add("upcoming-day");
        anchor.href = `detail.html?id=${item.id}`;
        h3.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
        span.innerHTML = item.release_date;

        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
        li.appendChild(anchor);
        movieList[1].appendChild(li);
    });
}
getNow();

async function upComing(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`)
    const {results} = await response.json();
    

    results.forEach(item => {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const anchor = document.createElement("a");

        li.classList.add("movie-card");
        h3.classList.add("movie-title");
        span.classList.add("upcoming-day");
        anchor.href = `detail.html?id=${item.id}`;
        h3.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
        span.innerHTML = item.release_date;
        li.appendChild(anchor);
        movieList[2].appendChild(li);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
    });
}   
upComing();

async function topRated(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`)
    const {results} = await response.json();
    console.log(results);

    results.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const h3 = document.createElement("h3");
        const anchor = document.createElement("a");

        li.classList.add("movie-card");
        h3.classList.add("movie-title");
        span.classList.add("upcoming-day");
        anchor.href = `detail.html?id=${item.id}`;
        h3.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
        span.innerHTML = item.release_date;
        anchor.appendChild(li);
        movieList[3].appendChild(li);
        anchor.appendChild(img);
        anchor.appendChild(h3);
        anchor.appendChild(span);
    });
}
topRated()