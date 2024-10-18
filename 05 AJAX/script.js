$(function(){
    //$.ajax({})  $.get()   $.post({})
    const url = 'https://jsonplaceholder.typicode.com/';
    const data = {
        'userId' : "2",
        'title' : "Próba",
        'body' : "Ez egy próba."
    }

    $.get(url)
    .done(function(d){      //sikeres kommunikációt követőenS
        let size = d.length;
        $('input').attr("max", size);
        $('input').change(function(){
            let num = $(this).val();    //input elem attribútum kiolvasása
            //url += "/" + num;
            $.ajax({
                url : url + "todos/" + num,  //kulcs : érték
                method : 'get',
                dataType : "json"
            })
            .done(function(d){
                let tpm = JSON.stringify(d);
                let html = `<table>
                                <tr>
                                    <th>Kulcs</th>
                                    <th>Érték</th>
                                </tr>`

                for(const key in d){
                    html += `<tr>
                                <td>${d[key]}</td>
                                <td>${d[key]}</td>
                            </tr>`
                }
                html += `</table>`
                $(".todo").html(html);

                /*let userData = `
                    <h2>Felhasználó adatai</h2>
                    <table>
                        <tr>
                            <th>userID: </th>
                            <th>id: </th>
                            <th>title: </th>
                            <th>completed: </th>
                        </tr>
                        <tr>
                            <td>${d.userId}</td>
                            <td>${d.id}</td>
                            <td>${d.title}</td>
                            <td>${d.completed}</td>
                        </tr>
                    </table>
                `;
                $(".todo").html(userData);*/
            })
        })
    })
    .fail(function(){})     //hiba esetén
    .always(function(){})   //minden esetben lefut

    $(document).on('click', '#kuld', function(){
        $.ajax({
            url : url + 'posts',
            method : 'POST',
            dataType : 'json',  //text, html,xml stb..
            data : data     //A 2. data a konstans változónk neve
        })
        .done(function(d){
            console.table(d);
        })
    })

    $(document).on('click', '#modosit', function(){
        $.ajax({
            url : url + 'posts/1',
            method : 'PATCH',
            dataType : 'json',
            data : {'title' : "13.b"}
        })
        .done(function(d){
            console.table(d);
        })
        .fail(function(){})
        .always(function(){
            console.log("Kész");
        })
    })

    $(document).on('click', '#torol', function(){
        $.ajax({
            url : url + 'posts/1',
            method : 'DELETE'
        })
        .done(function(d){
            console.log("Törölve");
        })
        .fail(function(){})
        .always(function(){
            console.log("Kész");
        })
    })

})