$(document).ready(function(){
    //$("p.red").toggleClass("yellow");

    $("p").each(function(){
        var $thisPara = $(this);
        var count = 0;
        $thisPara.click(function(){
            count++;
            $thisPara.find("span").text("click: " + count );
            $thisPara.toggleClass("highlight");
        });
    })
});