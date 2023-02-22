



// meal //

    $(function(){

        $("select.calculate").on("change", calc);
        $("input[type=checkbox].calculate").on("click", calc);

        function calc() {
        var basePrice = 0;
        newPrice = basePrice;
        // You need to loop over, not only the selected option, but also the checked checboxes
        $("select.calculate option:selected, input[type=checkbox].calculate:checked").each(function () {
        newPrice += parseInt($(this).data('price'), 10);
        });

        newPrice = newPrice.toFixed(2);
        $("#item-price").html(newPrice);
        }
    });












// validate //




    $.validator.setDefaults( {
        submitHandler: function () {
            alert( "Completed!" );
        }
        } );
        
        
        
        
        
        
        $( "#payment1" ).validate( {
        rules: {
            cardname: "required",
            cardnumber: {
                required: true,
                minlength: 12
            },
            expirydate: {
                required: true,
                minlength: 4
            },
            cvv: {
                required: true,
                minlength: 3
            },
            verification: {
                required: true,
                minlength: 5
            },
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
        
        
        
            agree: "required"        
        },
        messages: {
            cardname: "Please enter Card holder name",
            cardnumber: {
                required: "Please enter your Card number",
                minlength: "Your Card number must be at least 12 digits long"
            },
            expirydate: {
                required: "Please enter your Card expiry number",
                minlength: "Your password must be in DD/YY format"
            },
            cvv: {
                required: "Please enter your Card CVV number",
                minlength: "The CVV number must be at least 3 digits long"
            },
            verification: {
                required: "Please provide a Verifycode",
                minlength: "The Verifycode must be at least 5 digits long"
            },
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            email: "Please enter a valid email address",
        
        
            agree: "Please accept our policy"
            
        
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {

            error.addClass( "help-block" );
        

            element.parents( ".col-sm-5" ).addClass( "has-feedback" );
        
            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        

            if ( !element.next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
            }
        },
        success: function ( label, element ) {

            if ( !$( element ).next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        }
    } );
        
        







    $( "#payment2" ).validate( {
        rules: {
            cardname: "required",
            cardnumber: {
                required: true,
                minlength: 12
            },
            expirydate: {
                required: true,
                minlength: 4
            },
            cvv: {
                required: true,
                minlength: 3
            },
            verification: {
                required: true,
                minlength: 5
            },
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
        
        
        
            agree: "required"        
        },
        messages: {
            cardname: "Please enter Card holder name",
            cardnumber: {
                required: "Please enter your Card number",
                minlength: "Your Card number must be at least 12 digits long"
            },
            expirydate: {
                required: "Please enter your Card expiry number",
                minlength: "Your password must be in DD/YY format"
            },
            cvv: {
                required: "Please enter your Card CVV number",
                minlength: "The CVV number must be at least 3 digits long"
            },
            verification: {
                required: "Please provide a Verifycode",
                minlength: "The Verifycode must be at least 5 digits long"
            },
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            email: "Please enter a valid email address",
        
        
            agree: "Please accept our policy"
            
        
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {

            error.addClass( "help-block" );
        

            element.parents( ".col-sm-5" ).addClass( "has-feedback" );
        
            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        

            if ( !element.next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
            }
        },
        success: function ( label, element ) {

            if ( !$( element ).next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        }
    } );
        
        








    $( "#payment3" ).validate( {
        rules: {
            cardname: "required",
            cardnumber: {
                required: true,
                minlength: 12
            },
            expirydate: {
                required: true,
                minlength: 4
            },
            cvv: {
                required: true,
                minlength: 3
            },
            verification: {
                required: true,
                minlength: 5
            },
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
        
        
        
            agree: "required"        
        },
        messages: {
            cardname: "Please enter Card holder name",
            cardnumber: {
                required: "Please enter your Card number",
                minlength: "Your Card number must be at least 12 digits long"
            },
            expirydate: {
                required: "Please enter your Card expiry number",
                minlength: "Your password must be in DD/YY format"
            },
            cvv: {
                required: "Please enter your Card CVV number",
                minlength: "The CVV number must be at least 3 digits long"
            },
            verification: {
                required: "Please provide a Verifycode",
                minlength: "The Verifycode must be at least 5 digits long"
            },
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            email: "Please enter a valid email address",
        
        
            agree: "Please accept our policy"
            
        
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {

            error.addClass( "help-block" );
        

            element.parents( ".col-sm-5" ).addClass( "has-feedback" );
        
            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }

            if ( !element.next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
            }
        },
        success: function ( label, element ) {

            if ( !$( element ).next( "span" )[ 0 ] ) {
                $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
            $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
            $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        }
    } );
        
        



    


