//let rendszamPattern = /^[a-zA-Z]{3}+[100-999]{3}$/

$(function(){
    let benzin = [
        {
            value: '7.6',
            text: '1000 cm3-ig'
        },
        {
            value: '8.6',
            text: '1001-1500 cm3-ig'
        },
        {
            value: '9.5',
            text: '1501-2000 cm3-ig'
        },
        {
            value: '11.4',
            text: '2001-3000 cm3-ig'
        },
        {
            value: '13.3',
            text: '3001 cm3 felett'
        }
    ]

    let dizel = [
        {
            value: '5.7',
            text: '1500 cm3-ig'
        },
        {
            value: '6.7',
            text: '1501-2000 cm3-ig'
        },
        {
            value: '7.6',
            text: '2001-3000 cm3-ig'
        },
        {
            value: '9.5',
            text: '3001 cm3 felett'
        }
    ]

    let uzemanyag;
    //let filled = [false, false, true, true, true, true, true, true]
    let filled = [false, false, false, false, false, false, false, false]

    $(".container").submit(function(e){   //A kitöltött űrlap elemei nem kerülnek törlésre
        e.preventDefault();
    })

    $("[name=uzemanyagInput]").change(function(){
        uzemanyag = $(this).val();
        filled[0] = true;

        $("#cm3Input").html('<option value="-1"></option>');

        if(uzemanyag === "dizel"){
            getUzemanyag(dizel);
        }
        else{
            //benzin, elektromos és lpg meghajtású járművek esetén a benzinhez viszonyít
            getUzemanyag(benzin);
        }
    })

    $("[name=teritesInput]").change(function(){
        filled[1] = true;
    })

    $("[name=ftLInput]").change(function(){
        filled[2] = true;
    })

    $("[name=kobcentiSelect]").change(function(){
        filled[3] = true;
    })

    $("[name=rendszamInput]").change(function(){
        filled[4] = true;
    })

    $("[name=gyartoInput]").change(function(){
        filled[5] = true;
    })

    $("[name=honnanHovaInput]").change(function(){
        filled[6] = true;
    })

    $("[name=megtettTavInput]").change(function(){
        filled[7] = true;
    })

    $("input, select").change(function(){
        if(!filled.includes(false)){
            $("[type=submit]").attr("disabled", false);
        }
        /*switch(name){
            case 0: name = "uzemanyagInput"; break;
            case 1: name = "teritesInput"; break;
            case 2: name = "ftLInput"; break;
            case 3: name = "kobcentiSelect"; break;
            case 4: name = "rendszamInput"; break;
            case 5: name = "gyartoInput"; break;
            case 6: name = "honnanHovaInput"; break;
            case 7: name = "megtettTavInput"; break;
            default: name = "Üres.";
        }*/
    })

    /*$("#rendszam").change(function(){
        let rendszam = $(this).val().trim();
        let typeRendszam = $(this).attr("type");
        if (!rendszamPattern.test(rendszam) && typeRendszam == "rendszam"){
              $(".error").html("<p>A rendszám nem megfelelő!</p>")
        }
        else{
            $(".error").html("");
        }
    })*/
})

function getUzemanyag(t){
    t.forEach((o)=>{
        $("#cm3Input").append(`<option value="${o.value}">${o.text}</option>`);
    })
}

function isFilled(){

}


