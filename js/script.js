new Vue ({
  // ELMENTO //
  el : '#app',

  // DATI //
  data : {
    imgs : [ // array di immagini
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg'
    ],
    show : 'active', // show, richiama classe active
    imgIndex : 0 // indexOf di una img (parte dalla prima)
  },

// METODI //
  methods : {
    next : function(){ // Immagine Successiva
      const limit = this.imgs.length - 1; // ultimo indexOf possibile di una img
      if (this.imgIndex === limit) { // se l'indexOf(img) è uguale a limit
        this.imgIndex = 0; // l'indexOf(img) torna alla prima ( = 0)
      } else { // oppure
        this.imgIndex++; // aumenta di un numero
      }
    },
    prev : function(){ // Immagine Precedente
      const limit = this.imgs.length - 1; // ultimo indexOf possibile di una img
      if (this.imgIndex === 0) { // se l'indexOf(img) è il primo ( = 0)
        this.imgIndex = limit; // l'indexOf(img) diventa uguale al limit
      } else { // oppure
        this.imgIndex--; // decrementa di un numero
      }
    },
    doActive : function(index){ // Rendi Attiva
      if (index === this.imgIndex) { // se questo index è uguale all'indexOf(img)
        return this.show; // ritorna il valore dell'oggetto show
      }
    },
    showImg : function(index){ // Mostra Immagine
      this.imgIndex = index;
    }
  }
});
