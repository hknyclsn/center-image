(function ($) {
    $.fn.centerImage = function (options) {

        var options = $.extend({
            'width': 992
        }, options);

        var el = $(this);
        el.each( function () {
            var imageSrc    = $(this).attr('src');
            var imgAlt    = $(this).attr('alt');
            var imgClass = $(this).attr('class');

            if ( $(this).attr('data-responsive') == 'true' ||  $(this).attr('data-responsive') === undefined ) {
                if ( $(window).width() < options.width ) {
                    var canvasHeight = 'auto';
                    var imgstyle = "position: relative; max-width: 100%;";
                } else {
                    var canvasHeight = $(this).attr('data-height')+'px';
                    var imgWidth = $(this).attr('data-width')+'px';
                    var imgstyle = "transform: translate(-50%, -50%);position: absolute;left: 50%;top: 50%; width: "+ imgWidth +"";
                }
            } else {
                var canvasHeight = 'auto';
                var imgstyle = "position: relative; max-width: 100%;";
            }

            $(this).before('<div class="center-image-canvas" style="height: ' + canvasHeight + '; overflow: hidden; position: relative;"><img style="'+ imgstyle +'" src="' + imageSrc + '" alt="' + imgAlt + '" class="center-image '+ imgClass +'"  /></div>');
            $(this).remove();
        });
    };
}(jQuery));
