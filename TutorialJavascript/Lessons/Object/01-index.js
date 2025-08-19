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
    isOnline: true,
    presentati: function(){
        console.log(`ciao sono ${this.nome} ${this.cognome} e ho ${this.eta} anni`)
    },
    cambiaNome: function(){
        this.nome = "qwerty"
    },
}

const persona2 = {
    nome: "Marco",
    presentati: function(){
        console.log(`ciao sono ${this.nome}`)
    },
}

persona.cambiaNome()
persona.prova = "Ciao sono Dario"
persona.indirizzo.civico = 208
delete persona.prova

persona.presentati()
persona2.presentati()


//const keys = Object.keys(persona)
//const keyCasuale = keys[Math.floor(Math.random()*keys.length)]
//console.log(keyCasuale)
//console.log(persona[keyCasuale])

//console.log(persona["indirizzo"].citta)