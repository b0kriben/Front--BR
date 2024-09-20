let be = document.getElementsByTagName("input")[0]; // kiválasztásra kerül az első input elem
let buttons = document.querySelectorAll(".btn-secondary"); // Az összes btn-secondary osztályú gomb kerül kiválasztásra


buttons.forEach((b) => { //Bejárom a buttons NodeList-et
    b.addEventListener("click", () => { //Minden gombhoz kattintásra eseményhez egy callback függvényt csatolunk
        be.value += b.innerHTML; //Amelyik gombra kattintottunk annak felirata az input elembe kerül megjelenítésre
    })
})

function calc(){
    be.value = eval(be.value.replace("x","*")); //Az "x"-et *-ra cseréljük, az eval segítségével kiértékelésre kerül a kifejezés és lecseréljük
}