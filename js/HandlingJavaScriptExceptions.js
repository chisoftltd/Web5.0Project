
function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
    window.alert(position.coords.latitude + ' ' + position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHTML += ('<li>' + position.coords.latitude + ' ' + position.coords.longitude + '</li>');
    window.alert(list.innerHTML);
}
navigator.geolocation.watchPosition(position);