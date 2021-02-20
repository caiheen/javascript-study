const list = document.querySelector(".list");
const paging = document.querySelector(".paging");

let num = 1;

async function getMovie(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=${num}`);
    const {results} = await response.json();
    console.log(results);

    results.forEach(item => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p = document.createElement("p");
        h2.innerHTML = item.original_title;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`;
        p.innerHTML = item.overview;

        li.appendChild(h2);
        li.appendChild(img);
        li.appendChild(p);
        list.appendChild(li);
    });
}
getMovie();
window.addEventListener('scroll', function(){
    if((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight){
        num++;
        getMovie();
    }
})