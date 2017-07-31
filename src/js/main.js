"use strict";

(($) => {
    $('.fixed-header__button').click(function () {
        $(this).toggleClass("on");
        return false;
    });

    class SmoothScroll {
        constructor (settings) {
            this.wrapper = $('.full-page');
            this.screenItem = $('section[id*="page-"]');
            this.animationTime = settings.animationTime;
            this.animationDelay = settings.animationDelay;
        }

        formatPage () {
            let offsetY = 0,
                paginationCircle  = $('.pagination li'),
                currentPage = 0;
            if (!$('body').hasClass('formatted')) {
                this.screenItem.each(function () {
                    $(this).css('top', offsetY + "%");
                    offsetY += 100;
                });
                $('body').addClass('formatted');
            }

            currentPage = this.calcCurrentPage();

            if (currentPage) {
                this.screenItem.removeClass('active');
                this.screenItem.eq(currentPage).addClass('active');
                paginationCircle.removeClass('active');
                paginationCircle.eq(currentPage).addClass('active');
            }
        }

        calcCurrentPage () {
            let pageHeight  = this.screenItem.height(),
                pageCount   = this.wrapper.height() / pageHeight,
                position    = parseInt($(window).scrollTop());

            return position /pageHeight;
        }

        scrollInit () {
            $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', event => {
                event.preventDefault();
                let currentTime = new Date().getTime(),
                    delta = event.originalEvent.wheelDelta || -event.originalEvent.detail,
                    lastAnimation;
                if(currentTime - lastAnimation < this.animationDelay + this.animationTime) {
                    event.preventDefault();
                    return;
                }
                lastAnimation = currentTime;
                if (delta < 0 ) {
                    this.scrollDown()
                }
                else {
                    this.scrollUp()
                }
            });
        }

        scrollUp () {

        }

        scrollDown () {

        }
    }

    let test =  new SmoothScroll();
    test.formatPage();
    test.scrollInit()


})(jQuery);