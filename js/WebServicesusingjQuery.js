/*function makeRequest(){
    $.ajax({
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json'
    })
    .done(function(response) {
        $('body > p').text(
            JSON.stringify(Response)
        );
    })
    .fail(function(){
        alert('An error has occured')
    });
}*/

/*function makeRequest() {
    $.get({
        url:'http://httpbin.org/user-agent',
        dataType: 'json' 
    })
    .done(function(response){
        alert(JSON.stringify(response));
        $('body > p').text(
                response['user-agent']
        );
    });
}*/

 function makeRequest(){
     $.getJSON('http://httpbin.org/ip')
     .done(function(response){
         alert(JSON.stringify(response));
         $('body > p').text(
             response.orign
         );
     });
 }
$(document).ready(function(){
    makeRequest();
});