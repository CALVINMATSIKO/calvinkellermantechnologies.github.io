(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})
$("#contactForm").validator().on("submit", function (event) { if (event.isDefaultPrevented()) {  handle the invalid form... formError(); submitMSG(false, "Did you fill in the form properly?"); } else {  everything looks good! event.preventDefault(); submitForm(); } }); function submitForm(){  $Initiate Variables With Form Content var name = $("#name").val(); var email = $("#email").val(); var msg_subject = $("#msg_subject").val(); var message = $("#message").val(); $.ajax({ type: "POST", url: "assets/php/form-process.php", data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message, success : function(text){ if (text == "success"){ formSuccess(); } else { formError(); submitMSG(false,text); } } }); } function formSuccess(){ $("#contactForm")[0].reset(); submitMSG(true, "Message Submitted!") } function formError(){ $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ $(this).removeClass(); }); } function submitMSG(valid, msg){ if(valid){ var msgClasses = "h3 text-center tada animated text-success"; } else { var msgClasses = "h3 text-center text-danger"; } $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}