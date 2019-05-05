
//Get the current year for the copyright
$('#year').text(newDate().getFullYear());


$(document).ready(function () {

    //Initiate ScrollSpy
    $('body').scrollSpy({ target: '#main-nav' });

    //Smooth Scroll
    $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});