let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let pwdPattern = /^[\w]{8,256}$/
let irszamPattern = /^[1000-9999]{4}$/
// így is lehet
/*let errors = [];*/

$(function(){   //ready
    $("form").submit(function(event){
        event.preventDefault();
    })

    $("#email").change(function(){
        let email = $(this).val().trim();
        let typeEmail = $(this).attr("type");
        if (!emailPattern.test(email) && typeEmail == "email"){
              $(".error1").html("<p>Az email formátuma nem megfelelő!</p>")
        }
        else{
            $(".error1").html("");
        }
    })

    $("#pwd").change(function(){
        let pwd = $(this).val().trim();
        let typePwd = $(this).attr("type");
        if (!pwdPattern.test(pwd) && typePwd == "password"){
              $(".error2").html("<p>A password túlkevés / túlsok karakterből áll!</p>")
        }
        else{
            $(".error2").html("");
        }
    })

    $("#irszam").change(function(){
        let irszam = $(this).val().trim();
        let typeIrszam = $(this).attr("type");
        if (!irszamPattern.test(irszam) && typeIrszam == "iranyitoszam"){
              $(".error3").html("<p>Az irányítószám nem megfelelő!</p>")
        }
        else{
            $(".error3").html("");
        }
    })

    $("textarea").keypress(function(){
        let beirtBetuk = $(this).val().length;
        let szam = 100 - beirtBetuk;
        //let plusSzam = szam+1;
        $("#counter").html(szam);
        if (szam <= 0){
            $(".error4").html("<p>Több karaktert nem írhat be!</p>")
        }
        else{
            $(".error4").html("");
        }
    })

    $("button").click(function(){
        /*if (szam <= 0){
            $(".error").html("<p>Több karaktert nem írhat be!</p>")
        }
        else{
            $(".error").html("");
        }*/
    })

    // így is lehet
    /*$("imput").change(function(){
        let email = $(this).val().trim();
        let pwd = $(this).val().trim();
        let irszam = $(this).val().trim();
        let type = $(this).attr("type");
        if (!emailPattern.test(email) && type == "email"){
              errors.push("<p>Az email formátuma nem megfelelő!</p>");
        }
        else{
            errors = errors.filter(error => !error.includes("email"));
        }

        if (!pwdPattern.test(pwd) && typePwd == "password"){
            errors.push("<p>A password túlkevés / túlsok karakterből áll!</p>")
        }
        else{
            errors = errors.filter(error => !error.includes("password"));
        }

        if (!irszamPattern.test(irszam) && typeIrszam == "iranyitoszam"){
            errors.push("<p>Az irányítószám nem megfelelő!</p>")
        }
        else{
            errors = errors.filter(error => !error.includes("irányítószám"));
        }

        $(".error").html(errors.join(""));
    })*/
})