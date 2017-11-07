$( document ).ready(function() {
    $('[data-toggle-list="on"]').on('click',function (e) {
        e.preventDefault();
        var self = $(this);
        var icon = $(this).find('.badgeIcon i');
        icon.toggleClass('glyphicon-menu-down');
        icon.toggleClass('glyphicon-menu-right');
        var blockId = $(this).data('toggle-list-id');
        $('#' + blockId).slideToggle(100,function () {
            self.toggleClass('borderBottom');
        });
    })
    $("#fixedCategoryBlock").sticky({
        topSpacing: 10,
        bottomSpacing : 105
    });
    caruselProductImage();
});

function caruselProductImage() {
    $('.caruselImage').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        swipe: false,
        asNavFor: '.caruselThumb'
    });
    $('.caruselThumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.caruselImage',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
    });
}

/*
    Custom
 */
//= partials/helper.js