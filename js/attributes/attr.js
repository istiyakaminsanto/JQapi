$(document).ready(function(){
    
    // attr method
        // if attributes not exist then create new attributes
        $("#greatphoto").attr("title", "Hello world");
        // if attributes exist then replace it by value
        $("#greatphoto").attr("alt", "my name is khan");

        // passing value using object
        $("#para1").attr({
            class: "red",
        });

        // Set attribute and value using a function
        $(".down-button").click(function(){
            $(".first").attr("width", function(n, v){
                return v - 50;
            });
        });

        $(".up-button").click(function(){
            $(".first").attr("width", function(n, v){
                return parseInt(v) + 50;
            });
        });

    

        +function($inst){
            let count = 1;
            $inst.each(function(){
                let $owner = $(this);
                $owner.attr("id", "greatphoto" + count);
                $( "span", $owner ).html( "(id='greatphoto" + count + "')" );
                count++;

            });
        }($( "div [id]" ));
        
        $("div").text(function(){
            $("img").attr("alt", function(){
                return 
            })
        })

});


