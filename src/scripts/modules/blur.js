module.exports = function () {
    var blur = (function () {
        var formWrap = document.querySelector('.form_block'),
            form = document.querySelector('.form_image');

        return {
            set: function() {
                var bgWidth = document.querySelector('.form_image').offsetWidth,
                    bgHeight = document.querySelector('.form_image').offsetHeight,
                    posTop = -formWrap.offsetTop,
                    //blurCSS = form.style,
                    wrapHeight = formWrap.offsetHeight;
                    transformY = posTop-wrapHeight/2;
                    positionY =  blurCSS.background-position-y;
            }
        }
    })();

    blur.set();

    window.onresize = function () {
        
        blur.set();
    }

};