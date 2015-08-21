/**
 * Created by lishaohua on 15-4-16.
 */
$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        //config the scroll
          //window.AA_CONFIG = {
          //  animationLength:  1500,
          //  easingFunction:   'easeOutCirc',
          //  readyEvent:       'aa-ready',
          //  scrollOffset:     30
          //};

    })
;