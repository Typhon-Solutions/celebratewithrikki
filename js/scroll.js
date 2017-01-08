$(function(){
            $('a').click(function(){
                var speed = 1000;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                // var position = target.offset().top;
                var position = target.get( 0 ).offsetTop;
                $(".mdl-layout__content").animate({
                  scrollTop:position
                }, 1500, 'easeInOutExpo');
            });
        });
