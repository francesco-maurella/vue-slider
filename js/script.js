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
    imgIndex : 0 // indexOf di una img (parte dalla prima)
  },

// METODI //
  methods : {
    next : function(){ // Immagine Successiva
      const limit = this.imgs.length - 1; // ultimo indexOf possibile di una img
      if (this.imgIndex === limit) { // se l'indexOf(img) è uguale a limit
        this.imgIndex = 0; // l'indexOf(img) torna alla prima ( = 0)
      } else {
        this.imgIndex++; // aumenta di un numero
      }
    },
    prev : function(){ // Immagine Precedente
      const limit = this.imgs.length - 1;
      if (this.imgIndex === 0) { // se l'indexOf(img) è il primo ( = 0)
        this.imgIndex = limit; // l'indexOf(img) diventa uguale al limit
      } else {
        this.imgIndex--; // decrementa di un numero
      }
    },
    doActive : function(i){ // Rendi Attiva
      return  {'active' : i === this.imgIndex};
    },
    showImg : function(index){ // Mostra Immagine
      this.imgIndex = index;
    }
  }
});
