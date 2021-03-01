const search = document.querySelector(".search")
const input = document.querySelector("input");
const list = document.querySelector(".list");

async function getData(term){
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=AIzaSyBebrEaOeinIk1yp5OVt_7vSxgJ4FYwEis`);
    const {items} = await res.json();
    list.innerHTML = "";
    console.log(items);
    items.forEach((item) => {
        const {snippet} = item;
        const {thumbnails} = snippet;
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const li = document.createElement("li");
        img.src = thumbnails.default.url;
        h3.innerHTML = snippet.title;
        p.innerHTML = snippet.description;
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        list.appendChild(li);
    });
}

function searchForm(e){
    e.preventDefault();
    const value = input.value;
    getData(value);
    input.value = "";
}

search.addEventListener('submit', searchForm);