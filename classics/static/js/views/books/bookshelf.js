/**
 * Created by lishaohua on 15-8-28.
 */
$(function () {

    var $container = $('#ib-container');

    $container
            .visibility({
                once: true,
                // update size when new content loads
                observeChanges: true,
                // load content on bottom edge visible
                onBottomVisible: function (event) {
                    // loads a max of 5 times
                    //alert(event)

                    var book_html = '<article class="column">'
                                    + '    <header>'
                                    + '        <h3><a target="_blank"'
                                    + '               href="/book">'
                                    + '            红楼梦'
                                    + '        </a></h3>'
                                    + '        <span>曹雪芹</span>'
                                    + '    </header>'
                                    + '    <p>红楼梦,中国古典小说经典杰作;中国的经典,世界的杰作;中国古典小说的巅峰之作;无以伦比,精美绝伦</p>'
                                    + '</article>';
                    for (var i = 0; i < 15; i++) {
                        $(this).append(book_html);
                    }
                    //$(this).append(html);
                    $('.ui.sticky').sticky('refresh');

                }
            })
        ;

    var $articles = $container.children('article'),
        timeout;
    $articles.on('mouseenter', function (event) {

        var $article = $(this);
        clearTimeout(timeout);
        timeout = setTimeout(function () {

            if ($article.hasClass('active')) return false;

            $articles.not($article.removeClass('blur').addClass('active'))
                .removeClass('active')
                .addClass('blur');

        }, 65);

    });

    $container.on('mouseleave', function (event) {

        clearTimeout(timeout);
        $articles.removeClass('active blur');

    });

    // using context
    $('.bookshelf.container .ui.sidebar')
        .sidebar({
            context: $('.bookshelf.container .ib-container')
        })
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.bookshelf.container .menu .item')
    ;

});