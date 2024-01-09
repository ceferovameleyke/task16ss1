const id = new URLSearchParams(window.location.search).get("id")
const Elem = document.querySelector(".blok2")

function datail() {
    axios.get("http://localhost:3000/All/" + id)
        .then(res => res.data)
        .then(data => {
            Elem.innerHTML = `
            <div class="item">
            <div class="data-1">
                <img src="${data.image}" alt="">
            </div>
            <p>${data.name}</p>
            <span>${data.means}</span>
        
            </div>
            `
        })
}
datail()