const list = document.querySelector(".list");
const button = document.querySelector(".paging");
let number = 1;
async function getMovie(){
    const reponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=${number}`);
    const {results} = await reponse.json();
    results.forEach(item => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
        h2.innerText = item.original_title;
        p.innerText = item.overview;
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(p);
        list.appendChild(li);
    })
    console.log(results);
}

getMovie();
button.addEventListener('click', function(){
    list.innerHTML = "";
    number++;
    getMovie()
})