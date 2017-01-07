$(function(){
            $('a').click(function(){
                console.log("SMOOTH BEGIN");
                var speed = 1000;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                // var position = target.offset().top;
                var position = target.get( 0 ).offsetTop;
                $(".mdl-layout__content").animate({
                  scrollTop:position
                }, 1500, 'easeInOutExpo');
                console.log("SMOOTH END");
            });
        });
