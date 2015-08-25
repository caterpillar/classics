/**
 * Created by lishaohua on 15-8-23.
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

        $('.ui.sticky')
          .sticky({
            offset       : 200,
            bottomOffset : 200,
            context: '#library_book_list'
          })
        ;

    })
;