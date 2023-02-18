console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function compliment(evt) {
	evt.preventDefault();
	
	alert('The cat thinks you are pretty and or handsome');
}

let form = document.querySelector('#contact');
let catPic = document.querySelector('#catPic');

form.addEventListener('submit', handleSubmit);

catPic.addEventListener('mouseover', compliment);