$(function(){
    //$.ajax({})  $.get()   $.post({})
    let url = 'https://jsonplaceholder.typicode.com/todos';

    $.get(url)
    .done(function(d){      //sikeres kommunikációt követően
        let size = d.length;
        $('input').attr("max", size);
        $('input').change(function(){
            let num = $(this).val();    //input elem attribútum kiolvasása
            url += "/" + num;
            $.ajax({
                url : url,  //kulcs : érték
                method : 'get',
                dataType : "json"
            })
            .done(function(d){
                $(".content").append(JSON.stringify(d));
            })
        })
    })
    .fail(function(){})     //hiba esetén
    .always(function(){})   //minden esetben lefut
})