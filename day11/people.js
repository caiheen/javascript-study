const peoList = document.querySelector(".peo-list");
async function peopleList(){
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=1d21809e38135e1a123a0e36f69395e2&language=ko-KR&page=1`);
    const {results} = await response.json();
    console.log(results);
    results.forEach((item) => {
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const li = document.createElement("li");
        const span = document.createElement("span");
        const p = document.createElement("p");
        const anchor = document.createElement("a");
        anchor.href = `peopledetail.html?id=${item.id}`;
        item.known_for.forEach((item) => {
            p.innerHTML += `${item.title},`; 
        });
        img.src = `https://www.themoviedb.org/t/p/w235_and_h235_face${item.profile_path}`;
        h3.innerHTML = item.name;
        span.innerHTML = item.gender == 1 ? "여자" : "남자";
        anchor.appendChild(p);
        anchor.appendChild(h3);
        anchor.appendChild(img);
        anchor.appendChild(span);
        li.appendChild(anchor);
        peoList.appendChild(li);
    });
}
peopleList();