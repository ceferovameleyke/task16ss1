const forElem=document.querySelector(".for")
function alldata(){
    fetch("http://localhost:3000/All")
    .then (res=>res.json())
    .then (data=>{
        data.forEach(element => {
            forElem.innerHTML+=`
            <div class="item2">
            <img src="${element.image}" alt="">
            <span>${element.name}</span>
            <h5>${element.means}</h5>
            <p>${element.destriction}</p>
           </div>
            `
        });
    })
}
alldata()