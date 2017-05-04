$(document).ready(function() {
  
    var requirementsContent = $('.requirements-container-1');
    var requirementsToggleButton = $('.requirements .title');

    var applicationForm = $('.form');
    var buttonForm = $('.application-container-1 .button');

    buttonForm.on('click', function() {
        applicationForm.slideToggle(500);

        if ( applicationForm.is(':visible') ) {
            $('html, body').animate({
                scrollTop : applicationForm.offset().top
            });
        }
    });

    requirementsToggleButton.on('click', function() {
        requirementsContent.slideToggle();
    });

    // Validate form

    $('.form form').validate({
        rules: {
            nombreapellido : "required",
            email : {
                required: true,
                email: true
            }
        },
        messages: {
            nombreapellido : "Tu nombre y apellido son obligatorios. Obvio.",
            email : "Un correo valido, por favor. No deberíamos tener que decir por favor."
        },
        highlight: function(element) {
        $(element).addClass('is-danger');
        },
        unhighlight: function(element) {
            $(element).removeClass('is-danger');
        },
        submitHandler : function(form) {
            form.submit();
        }
    });
});