const ulkeler = [ 'turkey', 'italy', 'peru', 'russia'  ]

const kokEtiket = document.querySelector("#root")

ulkeler.forEach( renderUlke )

function renderUlke(ulkeAdi) {

    fetch( `https://restcountries.com/v3.1/name/${ulkeAdi}` )
    .then(yanit=>yanit.json())
    .then(bilgi=>{
        let ulkeObje = bilgi[0]

        let html = `
            <h2>${ulkeObje.name.common}</h2>
            <img src="${ulkeObje.flags.png}">
            <p>${ulkeObje.capital[0]}</p>
        `

        let yeniDiv = document.createElement("div")
        yeniDiv.innerHTML = html

        kokEtiket.append(yeniDiv)
    })
}


