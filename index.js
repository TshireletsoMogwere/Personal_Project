document.getElementById('submit').addEventListener('click');function(event) {
event.preventDefault ();

var name = document.getElementById('name').value;
var surname = document.getElementById('surname').value;  
var id = document.getElementById('ID').value;
var enquiry = document.getElementById('enquire').value;

console.log('Submitted Successfully');
}

