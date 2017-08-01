"use strict";

import  SmoothScroll from './SmoothScroll/index';

let test =  new SmoothScroll({
    animationDelay: 500,
    animationTime: 1000
});

test.formatPage();
test.scrollInit();
test.arrowNavInit();
test.menuInit();

$('.fixed-header__button').click( (event) => {
    $(event.currentTarget).toggleClass("on");
    return false;
});


