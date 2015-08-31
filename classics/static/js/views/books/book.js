/**
 * Created by lishaohua on 15-8-30.
 */
$(function () {

    $('.main.menu .chapter').on('click', function () {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
        ;
    });

    $('.main.menu').visibility({
        type: 'fixed'
    });

});