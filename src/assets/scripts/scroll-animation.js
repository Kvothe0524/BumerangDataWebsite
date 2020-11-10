$(function () {
  //Detecta el tamaño de pantalla
  var $window = $(window),
    win_height_padded = $window.height() * 1.1;
  $window.on("scroll", revealOnScroll); //LLama a la funcion revealOnScroll cada vez que se hace un scroll
  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
      win_height_padded = $window.height() * 1.1;
    //Por cada elemento con clase revealOnScroll visible se le añade la clase is-visible
    //La clase is-visible contiene la animacion
    $(".revealOnScroll").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data("timeout")) {
          window.setTimeout(function () {
            $this.addClass("is-visible");
          }, parseInt($this.data("timeout"), 10));
        } else {
          $this.addClass("is-visible");
        }
      }
    });
  }
  revealOnScroll();
});