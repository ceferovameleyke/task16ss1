const id = new URLSearchParams(window.location.search).get("id")
const Elem = document.querySelector(".blok2")

function datail() {
    fetch("http://localhost:3000/All/"+id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Elem.innerHTML += `
            <div class="item">
            <div class="data-1">
                <img src="${data.image}" alt="">
            </div>
            <p>${data.name}</p>
            <span>${data.means}</span>
            <button class="btn" onclick="history.back(${data.id})">Close</button>
        </div>
            `
        })
}
datail()