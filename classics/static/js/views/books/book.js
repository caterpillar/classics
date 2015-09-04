/**
 * Created by lishaohua on 15-8-30.
 */
$(function () {

    // 章节菜单弹出
    $('#bb-nav-chapter').on('click', function () {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
        ;
    });

    // 右侧固定浮动边栏
    $('.ui.sticky')
        .sticky({
            offset: 800,
            bottomOffset: 200,
            context: '.book.content'
        })
    ;

    // 上一章
    $('#bb-nav-prev').on('click', function () {
        var display_chapter = $('.chapter.content.display');
        var prev_display_chapter = $('.chapter.content.display').prev('div');
        display_chapter.fadeOut("slow");
        display_chapter.removeClass('display');
        prev_display_chapter.fadeIn("slow");
        prev_display_chapter.addClass('display');
    });

    // 下一章
    $('#bb-nav-next').on('click', function () {
        var display_chapter = $('.chapter.content.display');
        var next_display_chapter = $('.chapter.content.display').next('div');
        display_chapter.fadeOut("slow");
        display_chapter.removeClass('display');
        next_display_chapter.fadeIn("slow");
        next_display_chapter.addClass('display');
    });

    // 选择章节点击显示
    $('.ui.sidebar.menu .item').on('click', function () {
        var $this = $(this);
        var next_display_chapter_id = $this.attr('page-data');
        var display_chapter = $('.chapter.content.display');
        display_chapter.fadeOut('slow');
        display_chapter.removeClass('display');
        var next_display_chapter = $('#' + next_display_chapter_id);
        next_display_chapter.fadeIn('slow');
        next_display_chapter.addClass('display');
    });



    //var prePixelsPassed = 0.0;
    //// fix menu when passed
    //$('#book_content')
    //    .visibility({
    //        once: true,
    //        continuous: true,
    //        onTopPassed: function(calculations) {
    //            if (!$('.ui.main.menu').hasClass('visible')) {
    //                $('.ui.main.menu').transition('fade in');
    //            }
    //        },
    //        onOnScreen: function (calculations) {
    //            if (prePixelsPassed > calculations.pixelsPassed) {
    //                // console.info('向上滚+++++++');
    //                if (!$('.ui.main.menu').hasClass('visible')) {
    //                    $('.ui.main.menu').transition('fade in');
    //                }
    //            } else {
    //                // console.info('向下滚+++++++');
    //                if ($('.ui.main.menu').hasClass('visible')) {
    //                    $('.ui.main.menu').transition('fade out');
    //                }
    //            }
    //            prePixelsPassed = calculations.pixelsPassed;
    //        }
    //    })
    //;
});