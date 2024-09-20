let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let pwdPattern = /^[\w]{8,256}$/
let irszamPattern = /^[1000-9999]{4}$/

$(function(){   //ready
    $("form").submit(function(event){
        event.preventDefault();
    })

    $("input").change(function(){
        let email = $(this).val();
        let type = $(this).attr("type");
        if (!emailPattern.test(email) && type == "email"){
              $(".error").html("<p>Az email formátuma nem megfelelő!</p>")
        }
        else{
            $(".error").html("");
        }
    })

    $("input").change(function(){
        let pwd = $(this).val();
        let type = $(this).attr("type");
        if (!pwdPattern.test(pwd) && type == "password"){
              $(".error").html("<p>A password túlkevés / túlsok karakterből áll!</p>")
        }
        else{
            $(".error").html("");
        }
    })

    $("input").change(function(){
        let irszam = $(this).val();
        let type = $(this).attr("type");
        if (!irszamPattern.test(irszam) && type == "iranyitoszam"){
              $(".error").html("<p>Az irányító szám nem megfelelő!</p>")
        }
        else{
            $(".error").html("");
        }
    })

    $("button").click(function(){
        
    })
})