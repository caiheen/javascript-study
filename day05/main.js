const input = document.querySelector("input");
const gram = document.querySelector(".gram");
const oz = document.querySelector(".oz");
const pound = document.querySelector(".pound");

function weightConverter(event){
    const value = parseInt(event.target.value);
    console.log(value)
    const gramValue = value * 1000;
    const ozValue = value * 35.273962;
    const poundValue = value * 2.20462262;

    gram.innerHTML = gramValue;
    oz.innerHTML = ozValue;
    pound.innerHTML = poundValue;

}

input.addEventListener("change", weightConverter);