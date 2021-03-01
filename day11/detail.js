const wrap = document.querySelector(".wrap");
const title = document.querySelector(".title");
const overview = document.querySelector(".overview");

async function getDetail(cate,id){
    const response = await fetch(`https://api.themoviedb.org/3/${cate}/${id}?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-kR`);
    const data = await response.json();
    console.log(data);
    if(cate === "movie"){
        title.innerHTML = data.title;
        overview.innerHTML = data.overview;
        wrap.style.backgroundImage = `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)${data.backdrop_path}")`
    } else if(cate === "tv") {
        title.innerHTML = data.name;
        overview.innerHTML = data.overview;
        wrap.style.backgroundImage = `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)${data.backdrop_path}")`
    }
    
}
const getSearch = window.location.search.split("&");
const id = getSearch[0].slice(4);
const cate = getSearch[1].slice(5);
getDetail(cate,id);