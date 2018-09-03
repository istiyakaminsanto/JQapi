$(document).ready(function(){
    
    function DisplaySelectedValue(){
        var singleValues = $("#single").val();
        var multipleValues = $("#multiple").val() || [];

        $("p").html( "single = " + singleValues + "<br/>" + " multiple " + multipleValues.join(", "));
    }

    $("select").change(DisplaySelectedValue);
    DisplaySelectedValue();
});