(function ($) {
    $.fn.centerImage = function (options) {

        var options = $.extend({
            'width': 992
        }, options);

        var el = $(this);
        el.each(function () {
            var imageSrc = $(this).attr('src');
            var imageAlt = $(this).attr('alt');
            var imageClass = $(this).attr('class');
            var imageTop = $(this).height() / 2;
            var imageLeft = $(this).width() / 2;

            var imageHeight = $(this).attr('data-image-height');
            var imageWidth = $(this).attr('data-image-width');

            var canvasHeight = $(this).attr('data-height');
            var canvasWidth = $(this).attr('data-width') ? $(this).attr('data-width')+'px' : '100%';

            if ($(window).width() < options.width) {
            } else {
                var height = imageHeight === undefined ? '' : 'height: '+ imageHeight +';';
                var width = imageWidth === undefined ? '' : 'width: '+ imageWidth +';';

                var canvasStyle = 'width: '+ canvasWidth +'; height: '+ canvasHeight +'px; position: relative; overflow: hidden;';
                var imgstyle = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); '+ height +' '+ width +' ';
            }

            $(this).before('' +
                '<div class="center-image-canvas" style="'+ canvasStyle +'">' +
                '<img style="' + imgstyle + '" src="' + imageSrc + '" alt="' + imageAlt + '" class="center-image ' + imageClass + '"  />' +
                '</div>');
            $(this).remove();
        });
    };
}(jQuery));
