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

    $('#bb-nav-prev').on('click', function() {
        var display_chapter = $('.chapter.content.display');
        var prev_display_chapter = $('.chapter.content.display').prev('div');
        display_chapter.fadeOut("slow");
        display_chapter.removeClass('display');
        prev_display_chapter.fadeIn("slow");
        prev_display_chapter.addClass('display');
    });

    $('#bb-nav-next').on('click', function() {
        var display_chapter = $('.chapter.content.display');
        var next_display_chapter = $('.chapter.content.display').next('div');
        display_chapter.fadeOut("slow");
        display_chapter.removeClass('display');
        next_display_chapter.fadeIn("slow");
        next_display_chapter.addClass('display');
    });

    $('.ui.sidebar.menu .item').on('click', function() {
        var $this = $(this);
        var next_display_chapter_id = $this.attr('page-data');
        var display_chapter = $('.chapter.content.display').fadeOut('slow');
        display_chapter.removeClass('display');
        var next_disaply_chapter = $('#' + next_display_chapter_id);
        next_disaply_chapter.fadeIn('slow');
        next_disaply_chapter.addClass('display');
    });

});