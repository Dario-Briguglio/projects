//Date 
let oggi = new Date()
console.log(oggi.toLocaleString())

let dataInizio = new Date(2023,0, 1)
let dataFine = new Date(2023, 11, 31)

let differenzaGiorni = Math.floor((dataFine-dataInizio)/(60*60*24*1000))
console.log(differenzaGiorni)