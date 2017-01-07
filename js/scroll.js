$(function(){
            $('a').click(function(){
                console.log("SMOOTH BEGIN");
                var speed = 1000;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $(".mdl-layout__content").animate({
                  scrollTop:position
                }, speed, "swing");
                console.log("SMOOTH END");
            });
        });
