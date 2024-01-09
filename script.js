const forElem = document.querySelector(".for")

function alldata() {
    axios.get("http://localhost:3000/All")
        .then(res => res.data)
        .then(data => {
            data.forEach(element => {
                forElem.innerHTML += `
            <div class="item2" onclick='goTo(${element.id})'>
            <img src="${element.image}" alt="">
            <span>${element.name}</span>
            <h5>${element.means}</h5>
            <p>${element.destriction}</p>
            <div class="btn">
                <a href="./datails.html?id=${element.id}">Deteils</a>
                <a href='./add.html?id=${element.id}'>Update</a>
                <div onclick="deleteFunc(${element.id})">Delete</div>
            </div>
           </div>
            `
            });
        })
}
alldata()

function deleteFunc(id) {
    axios.delete("http://localhost:3000/All/" + id)
    window.location.reload()
}

