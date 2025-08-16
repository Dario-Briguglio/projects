// oggetti
const persona = {
    nome: "Luca",
    cognome: "Rossi",
    eta: 25,
    hobby: ["calcio","tennis"],
    indirizzo: {
        via: "via da qua",
        civico: 104, 
        cap: 44122, 
        citta: "Crotona",
        provincia: "Cr",
        paese: "IT"
    },
    isOnline: true
}

persona.prova = "Ciao sono Dario"
persona.indirizzo.civico = 208
delete persona.prova

console.log(persona)