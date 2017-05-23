/**
 * Created by grimax on 23/05/2017.
 */

$(document).ready(function() {

    scrollToSection();
    closeNavbarOnClick();

});

function scrollToSection() {
// Прокрутка к выбранному разделу

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

function closeNavbarOnClick() {

    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

}
