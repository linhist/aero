(function(wd, doc, bd) {
    $(document).ready(function() {
        $('.sb-toggle').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            bd.toggleClass('show-sb');
        });
        $('input, textarea', $('.fld-txt')).focus(function(){
            var t = $(this).parent();
            if (!t.hasClass('active')) t.addClass('active');
        }).blur(function(){
            var t = $(this), p = t.parent();
            if (!t.val()) p.removeClass('active');
        });
        $('.fld-drop .down').click(function(e) {
            e.preventDefault();
            var t = $(this).parent(), p = t.offset().top, d = $(wd).scrollTop() + $(wd).height() / 2 - t.height() /2;
            t.removeClass('upp');
            if (p > d) t.addClass('upp');
            t.toggleClass('active');
        });
    });
})(window, document, $('body'));