var $elam = document.getElementById('output');
$elam.innerHTML += 'Test ';
$elam.innerHTML += 4 + 6 + ' Demo';
$elam.innerHTML += ' Demo ' + 4 + 6;
$elam.innerHTML += ' Demo ' + (4 + 6);

var testVariable = null;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;