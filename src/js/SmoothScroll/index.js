class SmoothScroll {
    constructor (settings) {
        this.wrapper = $('.full-page');
        this.screenItem = $('section[id*="page-"]');
        this.animationTime = settings.animationTime || 200;
        this.animationDelay = settings.animationDelay || 100;
        this.pageHeight = 0;
        this.currentPage = 0;
        this.pageCount = 0;
        this.lastAnimation = 0;

        this.setPosition('default');
    }

    formatPage () {
        let offsetY = 0,
            paginationCircle = $('.pagination li');

        if (!$('body').hasClass('formatted')) {
            this.screenItem.each( (index, element) => {
                $(element).css('top', offsetY + "%");
                offsetY += 100;
            });
            $('body').addClass('formatted');
        }

        this.calcPageParams();

        if (this.currentPage !== undefined) {
            this.screenItem.removeClass('active');
            this.screenItem.eq(this.currentPage).addClass('active');
            paginationCircle.removeClass('active');
            paginationCircle.eq(this.currentPage).addClass('active');
            if (this.currentPage === 1 ) {
                $('.fixed-header').addClass('fixed-header_black');
            } else {
                $('.fixed-header').removeClass('fixed-header_black');
            }
            this.updateUrl(this.currentPage + 1);
        }
    }

    updateUrl (pageNumber) {
        let currentUrl = location.href.split('/'),
            newUrl = currentUrl[0] + '#page-' +pageNumber;
        window.history.pushState(null, null, newUrl);
        $(window).bind('hashchange', () => {
            let newPage = location.href.split('#')[1],
                newPageNumber = parseInt(newPage.slice(-1));
            this.goToPage(newPageNumber - 1);
        })
    }

    calcPageParams () {
        let pageHeight  = this.screenItem.height(),
            pageCount   = this.wrapper.height() / pageHeight;

        this.pageHeight  = parseInt(pageHeight);
        this.pageCount   = parseInt(pageCount);
    }

    scrollInit () {
        $(document).bind('mousewheel DOMMouseScroll', event => {
            event.preventDefault();
            let currentTime = new Date().getTime(),
                delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            if(currentTime - this.lastAnimation < this.animationDelay + this.animationTime) {
                event.preventDefault();
                return;
            }

            this.lastAnimation = currentTime;

            console.log(this.currentPage);
            if (delta < 0) {
                if (this.currentPage === (this.pageCount - 1)) {
                    return;
                }
                this.goNextPage();
            }
            else {
                if (this.currentPage !== 0) {
                    this.goPrevPage();
                }
            }
        });
    }

    arrowNavInit () {
        $(document).bind('keypress', e => {
            e.preventDefault();
            switch (e.keyCode) {
                case 38:
                    if (this.currentPage !== 0) {
                        this.goPrevPage();
                    }
                    break;
                case 40:
                    if (this.currentPage < (this.pageCount - 1)) {
                        this.goNextPage();
                    }
                    break;
            }
        });
    }

    menuInit () {
        $('.pagination a, .fixed-header__menu a').bind('click', event => {
            event.preventDefault();
            let link = $(event.currentTarget).attr('href'),
                page = parseInt(link.slice(-1)) - 1;
            this.goToPage(page);
        });
    }

    goPrevPage () {
        let prevPage = this.currentPage - 1;

        this.setPosition(prevPage);
        this.currentPage = prevPage;
        this.formatPage();
    }

    goNextPage () {
        let nextPage = this.currentPage + 1;

        this.setPosition(nextPage);
        this.currentPage = nextPage;
        this.formatPage();
    }

    goToPage (pageNumber) {
        let page = parseInt(pageNumber);
        if (page > (this.pageCount - 1) && page < 0) {
            console.log('Page not exist');
            return;
        }
        this.setPosition(page);
        this.currentPage = page;
        this.formatPage();
    }

    setPosition (page) {
        let position;
        if (page === 'default') {
            $(window).scrollTop(0);
            position = 0;
        }
        position = parseInt(page) * this.pageHeight * -1;
        if (position !== undefined) {
            this.wrapper.css({
                '-webkit-transform': 'translate3d(0px, '+ position + 'px, 0px)',
                '-moz-transform': 'translate3d(0px, '+ position + 'px, 0px)',
                '-ms-transform': 'translate3d(0px, '+ position + 'px, 0px)',
                '-o-transform': 'translate3d(0px, '+ position + 'px, 0px)',
                'transform': 'translate3d(0px, '+ position + 'px, 0px)'
            });
        }
    }
}