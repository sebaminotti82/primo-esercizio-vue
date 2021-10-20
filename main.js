/*
STAMPARE A SCHERMO UN MESSAGGIO ALL' INTERNO DI UN H1 UTILIZZANDO I DATA
BONUS DELL'ESERCIZIO:
AGGIUNGERE UN IMMAGINE ANCH'ESSA PRESA DAI DATA
*/


/*
PARTE UNO ESERCIZIO INSERIAMO UN TESTO IN UN H1 TRAMITE DATA
*/

const app = new Vue ({
    el:'.root',
    data:{
         messageh1:'PRIMO ESERCIZIO CON VUEJS',
//parte due di bonus inserisco un immagine tramite i data e inserisco anche un bottone che permetta di cambiare colore al titolo
         immagine:"img/foto1.jpg",
         color:'orange',
    },

    methods:{
        cambiaColore: function(){
            if(this.color==='orange'){
                this.color ='lemon'
            } else {
                this.color ='orange'
            }
        }
    }




})