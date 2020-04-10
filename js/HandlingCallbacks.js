function handleClick(callback){
    alert('This button has been clicked');
    if(callback) {
        callback();
    }
}

function doMore(){
    alert('I could process more logic here');
}

function doSomethingElse(){
    document.writeln('Test Message' + '<br/>' + 'Second Message')
}

function handleClick2(){
    document.getElementById("dateTarget2").innerHTML = Date();
}

document.getElementById('dateButton').onclick = handleClick3;
function handleClick3(){
    document.getElementById('dateTarget3').innerHTML = Date();
}

document.getElementById('dateButton2').addEventListener('click', handleClick4)
function handleClick4(){
    document.getElementById('dateTarget4').innerHTML = Date();
}

document.getElementById('dateButton3').addEventListener('click', function handleClick(){
    document.getElementById('dateTarget5').innerHTML = Date();
});