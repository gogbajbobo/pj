/**
 * Created by grimax on 23/05/2017.
 */

$(document).ready(function() {

    scrollToSection();
    spyForScrollSpy();
    closeNavbarOnClick();

});

function scrollToSection() {

    $(".navbar a, footer a[href='#pj-page']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 140
            }, 900, function() {
                window.location.hash = hash;
            });

        }

    });

}

function spyForScrollSpy() {

    $('body').on('activate.bs.scrollspy', function () {

        let navbarMenu = $('#menu-navbar');
        let activeMenuItem = navbarMenu.children('li.active');
        let activeMenuText = activeMenuItem.children('a').text();
        $('#infotext-navbar').text(activeMenuText);

    });

}

function closeNavbarOnClick() {

    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

}
