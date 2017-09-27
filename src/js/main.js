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
});

/*
    Custom
 */
//= partials/helper.js