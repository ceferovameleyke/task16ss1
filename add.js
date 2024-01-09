const id=new URLSearchParams(window.location.search).get("id")
const image=document.querySelector(".image")
const img=document.querySelector("img")
const file=document.querySelector("#file")
const name=document.querySelector("#name")
const means=document.querySelector("#means")
const destriction=document.querySelector("#destriction")
const save=document.querySelector(".save")

if(id){
  axios.get("http://localhost:3000/All/"+id)
.then(res => res.data)
.then(data => {
  img.src=data.image
  name.value=data.name
  means.value=data.means
  destriction.value=data.destriction
})
}

file.addEventListener("input", () => {
  const i=file.files[0]
  if(i){
    const reader=new FileReader
    reader.readAsDataURL(i)
    reader.addEventListener("load", () => {
      img.src=reader.result
    })
  }
})

save.addEventListener("click" , () => {
  // update hissesi edit
  if(id){
    axios.put("http://localhost:3000/All/"+id, {
    image:img.src,
    name:name.value,
    destriction:destriction.value,
    means:means.value
  })
  }
  // elave edir add +
  else{
    axios.post("http://localhost:3000/All/", {
    image:img.src,
    name:name.value,
    destriction:destriction.value,
    means:means.value
  })
  }
  window.location="./index.html"

})
