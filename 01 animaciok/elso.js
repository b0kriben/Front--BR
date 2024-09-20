// $(document).ready(function(){ })  // amikor az oldat betöltődött

$(function(){ // ready rövidebb változata
    console.log("betöltött");
    $(".bg-danger").click(function(){
        $(this).hide(1500).show(1000).fadeOut();
    })
    $(".bg-success").mouseover(function(){
        $(this).fadeOut(1500);
    })
    $(".bg-primary").mouseleave(function(){
        $(this).slideUp(1500);
    })
    $(".btn").click(function(){
        $("div").fadeIn(1000); // összes div elemre hatással van
    })
    /*$(".btn").click(function(){
        $(".bg-danger").fadeIn(1000);
        $(".bg-success").fadeIn(1000);
        $(".bg-primary").fadeIn(1000);
    })*/

    $(document).ready(function(){
        $(".btnAnimation").click(function(){
            var div = $(".animation");
            div.animate({height: '300px', opacity: '0.4'}, "slow");
            div.animate({width: '300px', opacity: '0.8'}, "slow");
            div.animate({height: '100px', opacity: '0.4'}, "slow");
            div.animate({width: '100px', opacity: '0.8'}, "slow");
            div.animate({fontSize: '3em'}, "slow")
        })
    })
})