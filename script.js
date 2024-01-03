// 2372052_Intan Nuraeni_C
//menu
var tombolMenu = $('.tombol-menu');
var menu = $('nav .menu ul');

// gallery img
var image = document.getElementById('gallery');

function klikMenu() {
   tombolMenu.click(function () {
      menu.toggle();
   });
   menu.click(function () {
      menu.toggle();
   });
}

$(document).ready(function () {
   var width = $(window).width();
   if (width < 990) {
      klikMenu();
   }
});

//check lebar
$(window).resize(function () {
   var width = $(window).width();
   if (width > 989) {
      menu.css('display', 'block');
   }
   klikMenu();
});



console.log(screen.width);
