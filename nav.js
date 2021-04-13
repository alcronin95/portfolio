$(document).ready(function () {
  console.log("current page", window.location.href);
  $("[href]").each(function () {
      $('a[href]:not([href=#])').each(function () {

          if (window.location.href.indexOf($(this).attr('href')) > -1) {
              console.log($(this).attr('href') +" is current ");
              $(this).addClass('current');
          }
          else {
              console.log($(this).attr('href') + "is not current ");
          }
      });
  });
});