new Vue ({
  el : '#app',

  data : {
    imgs : [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg'
    ],
    imgIndex : 0
  },

  methods : {
    next : function(){
      const limit = this.imgs.length - 1
      if (this.imgIndex === limit) {
        this.imgIndex = 0;
      } else {
        this.imgIndex++;
      }
    },
    prev : function(){
      const limit = this.imgs.length - 1
      if (this.imgIndex === 0) {
        this.imgIndex = limit;
      } else {
        this.imgIndex--;
      }
    }
  }
});
