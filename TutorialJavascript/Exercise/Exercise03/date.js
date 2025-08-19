//date

let oggi = new Date()
let ieri = new Date(2021,10,14)

let differenzaGiorni = Math.floor((oggi-ieri)/(1000*60*60*24))
console.log(differenzaGiorni)

const dataAMeta = new Date(ieri.getTime()+differenzaGiorni/2*24*60*60*1000)
console.log(dataAMeta.toLocaleDateString())
console.log(dataAMeta.toLocaleString())