const forElem = document.querySelector(".for")

function goTo (id){
    window.location = './datails.html?id=' + id
}

function alldata() {
    fetch("http://localhost:3000/All")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                forElem.innerHTML += `
            <div class="item2" onclick='goTo(${element.id})'>
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

// const menu=document.querySelector(".list")
// const menuicon=document.querySelector("#menu")
// const closebtn=document.querySelector(".closebtn")
// menuicon.addEventListener("click", ()=>{ 
//     menu.style.transform="translateX(100%)"
//     menu.classList.add("active")
//     closebtn.addEventListener("click", ()=>{
//         menu.style.transform="translateX(0%)"
//         menu.classList.remove("active")
//     })

// })

function Get (){
    fetch(" http://localhost:3000/All")
  .then(res=> res.json())
  .then(data=>{

  })
}