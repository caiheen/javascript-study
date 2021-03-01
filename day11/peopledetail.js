const peopleWrap = document.querySelector(".people-wrap");

async function getpeople(id){
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR`);
    const data = await response.json();
    console.log(data);
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    img.src = `https://www.themoviedb.org/t/p/w235_and_h235_face${data.profile_path}`;
    h3.innerHTML = data.name;
    p.innerHTML = data.birthday;
    peopleWrap.appendChild(img);
    peopleWrap.appendChild(h3);
    peopleWrap.appendChild(p);
}
const id = window.location.search.slice(4);
getpeople(id);