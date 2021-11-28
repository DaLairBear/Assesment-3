console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted Sucessfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const pictureHoverCompliment = (event) =>{
	event.preventDefault()
	alert("Good Job!")
}

let img = document.querySelector('img')

img.addEventListener('mouseover', pictureHoverCompliment)