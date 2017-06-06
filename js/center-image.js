(function ($) {
    $.fn.centerImage = function (options) {

        var options = $.extend({
            'responsive': [1024,768]
        }, options);

        var el = $(this);
        el.each(function () {
            var imageSrc = $(this).attr('src');
            var imageAlt = $(this).attr('alt');
            var imageClass = $(this).attr('class');
            var imageTop = $(this).height() / 2;
            var imageLeft = $(this).width() / 2;

            var imageHeight = $(this).attr('data-image-height') ? $(this).attr('data-image-height') : 'auto';
            var imageWidth = $(this).attr('data-image-width') ? $(this).attr('data-image-width') : 'auto';

            var tabletActive = $(this).attr('data-sm');
            var mobileActive = $(this).attr('data-xs');

            var canvasHeight = $(this).attr('data-height') ? $(this).attr('data-height') : '100%';
            var canvasWidth = $(this).attr('data-width') ? $(this).attr('data-width') : '100%';

            if ($(window).width() > 0 && $(window).width() < options.responsive[1]) {
                // Phone
                if (mobileActive == 'true') {
                    var height = imageHeight === undefined ? '' : 'height: '+ imageHeight +';';
                    var width = imageWidth === undefined ? '' : 'width: '+ imageWidth +';';

                    var canvasStyle = 'width: '+ canvasWidth +'; height: '+ canvasHeight +'; position: relative; overflow: hidden;';
                    var imgstyle = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); '+ height +' '+ width +' ';
                }
                else {
                    var canvasStyle = 'position: relative; overflow: hidden;';
                    var imgstyle = 'max-width: 100%;';
                }
            }
            else if ($(window).width() > options.responsive[1] && $(window).width() < options.responsive[0]) {
                // Tablet
                if (tabletActive == 'true') {
                    var height = imageHeight === undefined ? '' : 'height: '+ imageHeight +';';
                    var width = imageWidth === undefined ? '' : 'width: '+ imageWidth +';';

                    var canvasStyle = 'width: '+ canvasWidth +'; height: '+ canvasHeight +'; position: relative; overflow: hidden;';
                    var imgstyle = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); '+ height +' '+ width +' ';
                }
                else {
                    var canvasStyle = 'position: relative; overflow: hidden;';
                    var imgstyle = 'max-width: 100%;';
                }
            }
            else {
                var height = imageHeight === undefined ? '' : 'height: '+ imageHeight +';';
                var width = imageWidth === undefined ? '' : 'width: '+ imageWidth +';';

                var canvasStyle = 'width: '+ canvasWidth +'; height: '+ canvasHeight +'; position: relative; overflow: hidden;';
                var imgstyle = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); '+ height +' '+ width +' ';
            }

            if ($(this).parent().hasClass('center-image-canvas')) {
                $(this).attr({
                    style: imgstyle
                });
                $(this).parent().attr({
                    style: canvasStyle
                })
            } else {
                $(this).before('' +
                    '<div class="center-image-canvas" style="'+ canvasStyle +'">' +
                    '<img data-height="'+ canvasHeight +'" data-width="'+ canvasWidth +'" data-image-height="'+ imageHeight +'" data-image-width="'+ imageWidth +'" data-sm="'+ tabletActive +'" data-xs="'+ mobileActive +'" style="' + imgstyle + '" src="' + imageSrc + '" alt="' + imageAlt + '" class="' + imageClass + '"  />' +
                    '</div>');
                $(this).remove();
            }
        });
    };

    $(document).ready(function () {
        $('.center-image').centerImage();
    });

    $(window).resize(function () {
        $('.center-image').centerImage();
    });
}(jQuery));
