// Hide Scrollbar For Desktop Resizing
window.onresize = resizeev;
function resizeev() {

  if (window.matchMedia("(max-width: 1140px)").matches || window.location.pathname == '/allegens.html') {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  } else if (window.matchMedia("(max-width: 1900px)").matches && window.location.pathname == '/stores.html') {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  } else if (window.matchMedia("(max-width: 1900px)").matches && window.location.pathname == '/sustainability.html') {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  } else if (window.location.pathname == '/menu.html') {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  } else {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  }
};

// When Page Is Loaded
$(document).ready(function() {
  // Set Hight Matching Free Space For Slides
  $('#myCarousel').height($(window).height() - $('#navi').height());
  $('#img1').height($(window).height() - $('#navi').height());
  $('#img2').height($(window).height() - $('#navi').height());
  $('#img3').height($(window).height() - $('#navi').height());
  $('#img4').height($(window).height() - $('#navi').height());
  $('#myCarouselm').height($(window).height() - $('#navi').height());
  $('#img1m').height($(window).height() - $('#navi').height());
  $('#img2m').height($(window).height() - $('#navi').height());
  $('#img3m').height($(window).height() - $('#navi').height());
  $('#img4m').height($(window).height() - $('#navi').height());
  // Set Slides Speed
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000 // 2 seconds
  // Set Hover Zone For Items On Menu
  $('map').imageMapResize();

  // Display Interactive Menu Images On Hover
  var x;
  var y;
  var thisText;
  var type;
  // Display Interactive Menu Images On Hover to Right
  $("area[value='right']").hover(function(e) {
      thisText = $(this).attr("id");
      type = $(this).attr("class")
      var position = $(this).attr('coords').split(',');
      x = +position[2] + 250;
      y = +position[1] - 115;
      if ($(".info").length != 0) {
        $(".info").fadeOut(500).animate({
          left: x + 'px'
        }, {
          queue: false,
          duration: 350
        }).queue(function() {
          $(this).remove();
        });
      }
      $("#mapids").append("<div class='info' id='info" + thisText + "' style='left:" + x + "px;top:" + y + "px;background-image: url(img/menu/" + thisText + ".png);'></div>");
      $("#info" + thisText).fadeIn(500).animate({
        left: x + 20 + 'px'
      }, {
        queue: false,
        duration: 350
      });
    },
    function() {
      $("#info" + thisText).fadeOut(500).animate({
        left: x + 'px'
      }, {
        queue: false,
        duration: 350
      }).queue(function() {
        $(this).remove();
      });
    });

    // Display Interactive Menu Images On Hover to Left
    $("area[value='left']").hover(function(e) {
        thisText = $(this).attr("id");
        type = $(this).attr("class")
        var position = $(this).attr('coords').split(',');
        x = +position[0] + 80;
        y = +position[1] - 115;
        if ($(".infoleft").length != 0) {
          $(".infoleft").fadeOut(500).animate({
            left: x + 'px'
          }, {
            queue: false,
            duration: 350
          }).queue(function() {
            $(this).remove();
          });
        }
        $("#mapids").append("<div class='infoleft' id='infoleft" + thisText + "' style='left:" + x + "px;top:" + y + "px;background-image: url(img/menu/" + thisText + ".png);'></div>");
        $("#infoleft" + thisText).fadeIn(500).animate({
          left: x - 20 + 'px'
        }, {
          queue: false,
          duration: 350
        });
      },
      function() {
        $("#infoleft" + thisText).fadeOut(500).animate({
          left: x + 'px'
        }, {
          queue: false,
          duration: 350
        }).queue(function() {
          $(this).remove();
        });
      });

      // Display Interactive Menu Images On Hover to Above
      $("area[value='up']").hover(function(e) {
          thisText = $(this).attr("id");
          type = $(this).attr("class")
          var position = $(this).attr('coords').split(',');
          x = +position[2] + 125;
          y = +position[1] - 110;
          if ($(".infoup").length != 0) {
            $(".infoup").fadeOut(500).animate({
              top: y + 'px'
            }, {
              queue: false,
              duration: 350
            }).queue(function() {
              $(this).remove();
            });
          }
          $("#mapids").append("<div class='infoup' id='infoup" + thisText + "' style='left:" + x + "px;top:" + y + "px;background-image: url(img/menu/" + thisText + ".png);'></div>");
          $("#infoup" + thisText).fadeIn(500).animate({
            top: y - 10 + 'px'
          }, {
            queue: false,
            duration: 350
          });
        },
        function() {
          $("#infoup" + thisText).fadeOut(500).animate({
            top: y + 'px'
          }, {
            queue: false,
            duration: 350
          }).queue(function() {
            $(this).remove();
          });
        });
});

// When Page Is Loading
$(window).on("load", function() {
  // Set Hight Matching Free Space For Slides
  $('#myCarousel').height($(window).height() - $('#navi').height());
  $('#img1').height($(window).height() - $('#navi').height());
  $('#img2').height($(window).height() - $('#navi').height());
  $('#img3').height($(window).height() - $('#navi').height());
  $('#img4').height($(window).height() - $('#navi').height());
  $('#myCarouselm').height($(window).height() - $('#navi').height());
  $('#img1m').height($(window).height() - $('#navi').height());
  $('#img2m').height($(window).height() - $('#navi').height());
  $('#img3m').height($(window).height() - $('#navi').height());
  $('#img4m').height($(window).height() - $('#navi').height());

});
