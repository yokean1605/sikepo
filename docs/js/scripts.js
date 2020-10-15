(function($) {
    "use strict"; // Start of use strict

    $(window).on('scroll', function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".nav-custom").addClass("background-c");
        } else {
            $(".nav-custom").removeClass("background-c");
        }
    });
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).on('scroll', function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    $('a[href="#header"]').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });


    var fx = function fx() {
        $(".stat-number").each(function (i, el) {
            var data = parseInt(this.dataset.n, 10);
            var props = {
                "from": {
                    "count": 0
                },
                    "to": { 
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 1000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete:function() {
                    if (el.dataset.sym !== undefined) {
                      el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
        };
        
        var reset = function reset() {
            //console.log($(this).scrollTop())
            if ($(this).scrollTop() > 90) {
                $(this).off("scroll");
              fx()
            }
        };
        
        $(window).on("scroll", reset);
})(jQuery); // End of use strict
