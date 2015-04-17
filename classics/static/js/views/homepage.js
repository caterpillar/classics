/**
 * Created by lishaohua on 15-4-16.
 */
// namespace
window.classics = {
    handler: {}
};
classics.home = {};
classics.home.ready = function () {
    if ($(window).width() > 600) {
        $('body')
            .visibility({
                offset: -1,
                once: false,
                continuous: false,
                onTopPassed: function () {
                    $('.following.bar')
                        .addClass('light fixed')
                        .find('.menu')
                        .removeClass('inverted')
                    ;
                    requestAnimationFrame(function () {
                        $('.following .additional.item')
                            .transition('scale in', 750)
                        ;
                    });
                },
                onTopPassedReverse: function () {
                    $('.following.bar')
                        .removeClass('light fixed')
                        .find('.menu')
                        .addClass('inverted')
                        .find('.additional.item')
                        .transition('hide');
                }
            })
        ;
    }
};
// attach ready event
$(document)
    .ready(classics.home.ready)
;