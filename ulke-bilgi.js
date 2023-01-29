const divIsim = document.querySelector("#isim")
const imgBayrak = document.querySelector("#bayrak")
const divBaskent = document.querySelector("#baskent")
const divYukleniyor = document.querySelector("#yukleniyor")
const selectUlke = document.querySelector("#selectUlke")

setTimeout( function() { 

    veriCek("turkey")

 }, 3000  )



 selectUlke.addEventListener('change', function(){
    veriCek(selectUlke.value)
 })


 function veriCek(ulkeAdi) {

    fetch(`https://restcountries.com/v3.1/name/${ulkeAdi}`)
    .then((yanit)=>yanit.json()) //APIden gelen JSON string js objesi veya arraye dönüştürülüyor
    .then((bilgi)=>{
        divYukleniyor.remove()

        let ulkeObje = bilgi[0]
    
        divIsim.textContent = ulkeObje.name.common
        imgBayrak.src = ulkeObje.flags.png
        imgBayrak.style.maxWidth="100px"
        divBaskent.textContent = ulkeObje.capital[0]
    })

 }