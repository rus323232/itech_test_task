"use strict";

$(document).ready(() => {
    $('.fixed-header__button').click(function () {
        $(this).toggleClass("on");
        return false;
    });
});
