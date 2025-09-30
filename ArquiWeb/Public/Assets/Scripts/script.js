const menuToggle = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.add('nav-toggle');
    menuToggle.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
    navbar.classList.remove('nav-toggle');
    menuToggle.style.display = 'block';
    menuClose.style.display = 'none';
});

$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function() {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
