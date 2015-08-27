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


        $('.container.books')
            .visibility({
                once: false,
                // update size when new content loads
                observeChanges: true,
                // load content on bottom edge visible
                onBottomVisible: function (event) {
                    // loads a max of 5 times
                    //alert(event)

                    var book_html = '<div class="ui wide column book">'
                        + '                <div class="content">'
                        + '                    <a href="#">'
                        + '                       <img class="ui image" style="width: 240px;height: 180px;"'
                        + '                             src="../../static/examples/assets/images/wireframe/image.png">'
                        + '                        <div class="item"><span>红楼梦</span></div>'
                        + '                    </a>'
                        + '                </div>'
                        + '                <div class="ui items">'
                        + '                    <div class="item">'
                        + '                        <div class="content info">'
                        + '                            <div class="meta author">'
                        + '                                <span><i class="user icon"></i>曹雪芹</span>'
                        + '                            </div>'
                        + '                            <div class="meta likes">'
                        + '                                <a class="like"><i class="like icon"></i></a> {{ item }}'
                        + '                            </div>'
                        + '                        </div>'
                        + '                    </div>'
                        + '                </div>'
                        + '            </div>';
                    //var html = '';
                    for (var i = 0; i < 20; i++) {
                        $(this).append(book_html);
                    }
                    //$(this).append(html);
                    $('.ui.sticky').sticky('refresh');

                }
            })
        ;

        $('.ui.sticky')
            .sticky({
                offset: 200,
                bottomOffset: 200,
                context: '#library_book_list'
            })
        ;

    })
;