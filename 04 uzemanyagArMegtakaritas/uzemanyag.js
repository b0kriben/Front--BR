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
    let filled = [false, false, false, false, false, false, false, false];
    let ertekek = {};

    $("form").submit(function(e){   //A kitöltött űrlap elemei nem kerülnek törlésre
        e.preventDefault();
    })

    $("[type=submit]").click(function(){
        szamitas(ertekek);
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

    //ez is működik
    /*$("[name=teritesInput]").change(function(){
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
    })*/


    $("input, select").change(function(){
        let element = $(this);

        ertekek[$(this).attr("name")] = $(this).val();
        console.table(ertekek);

        switch(element.attr("name")){
            case "uzemanyagInput" : 
                filled[0] = true; 
                break;
            case "teritesInput" : 
                filled[1] = true; 
                break;
            case "ftLInput" : 
                filled[2] = true; 
                break;
            case "kobcentiSelect" : 
                filled[3] = true; 
                break;
            case "rendszamInput" : 
                filled[4] = true; 
                break;
            case "gyartoInput" : 
                filled[5] = true; 
                break;
            case "honnanHovaInput" : 
                filled[6] = true; 
                break;
            case "megtettTavInput" : 
                filled[7] = true; 
                break;
        }

        if(!filled.includes(false)){
            $("[type=submit]").attr("disabled", false);
        }
        
    //ez is működik
    /*$("input, select").change(function(){
        if(!filled.includes(false)){
            $("[type=submit]").attr("disabled", false);
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
})  //ready vége

function getUzemanyag(t){
    t.forEach((o)=>{
        $("#cm3Input").append(`<option value="${o.value}">${o.text}</option>`);
    })
}

function szamitas(ertekek){
    //for(const key in ertekek){
        //if(Object.hasOwnProperty.call(ertekek, key)){
            //const element = ertekek[key];
            let fogy = 0;
            if(key == "uzemanyagInput"){
                switch (ertekek[key].toLowerCase()){
                    case "elektromos": fogy = 3; break;
                    case "lpg": fogy = ertekek["cm3Input"] * 1.2; break;
                    default: fogy = ertekek["cm3Input"];
                }
            }
            let koltseg = fogy * megtettTav / 100 * ertekek["ftLInput"] + megtettTav * teritesInput;
            $(".koltseg").html(`<p>${koltseg}</p>`)
        //}
    //}
}
