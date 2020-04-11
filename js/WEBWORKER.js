function startWorker(){
    worker = new Worker("js/worker.js");
    worker.onmessage = function(event){
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}

function stopWorker(){
    console.clear();
    worker.terminate();
}