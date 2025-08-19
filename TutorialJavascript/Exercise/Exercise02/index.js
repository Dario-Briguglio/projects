//esercizi oggetti
//creare oggetti per rappresentare 2 giocatori ed il gioco che stanno facendo
// i giocatori possono entrare ed uscire dalla partita
// mandare a schermo ogni volta la situzione dei giocatori in game

const giocatore1 = {
    nome:"fefferobottina",
}
const giocatore2 = {
    nome: "negraccioMalvagio",
}

const paritaOnline = {
    giocatori: [],
    disconnetti: function(giocatore){
        const index = this.giocatori.indexOf(giocatore)
        this.giocatori.splice(index,1 )
        this.mostraGiocatori()
    },
    connetti: function(giocatore){
        this.giocatori.push(giocatore)
        this.mostraGiocatori()
    },
    mostraGiocatori: function(){
        console.log(this.giocatori.map(giocatore=>giocatore.nome).join(', '))
    },
}
paritaOnline.connetti(giocatore1)
paritaOnline.connetti(giocatore2)