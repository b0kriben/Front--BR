$(function(){

    $("[type=range]").change(function(){
        let colorR = $("#rangeR").val();
        let colorG = $("#rangeG").val();
        let colorB = $("#rangeB").val();
        let colorA = $("#rangeA").val();

        $(".changeColor").css("background-color", `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`)
    
        $("#counterR").html(`${colorR}`);
        $("#counterG").html(`${colorG}`);
        $("#counterB").html(`${colorB}`);
        $("#counterA").html(`${colorA}`);
    })
})